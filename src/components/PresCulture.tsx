import React, { useState, useEffect } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd";
import { motion, AnimatePresence } from "framer-motion";

type SectionKey = "goals" | "tasks" | "partners" | "results" | "persons";

const sectionNames: Record<SectionKey, string> = {
    goals: "Цели",
    tasks: "Задачи",
    partners: "Партнёры",
    results: "Проекты",
    persons: "Персоны",
};

type Item = {
    id: string;
    content: string;
};

const allItems: Item[] = [
    { id: "1", content: "Включение творческого наследия СССР в информационное пространство" },
    { id: "2", content: "Сохранение памяти о конкретных деятелях культуры" },
    { id: "3", content: "Создание документальных фильмов" },
    { id: "4", content: "Распространение объектов цифрового культурного наследия в общественном доступе" },
    { id: "5", content: "Оцифровка культурного наследия" },
    { id: "7", content: "БИА-АРТ «Всероссийский конкурс молодых художников, исследователей и дизайнеров»" },
    { id: "9", content: "Общественная инициатива «Цифровой Сталинград»" },
    { id: "19", content: "Интернет-сайт «Виктор Кочедамов: творчество и современность»" },
    { id: "10", content: "Максим Якубсон — режиссёр-документалист" },
    { id: "11", content: "Зинаида Курбатова — тележурналист" },
    { id: "12", content: "Пётр Олейников — профессор ВолгГТУ" },
    { id: "16", content: "Ольга Биантовская — художник-график" },
    { id: "17", content: "Виктор Кочедамов — архитектор" },
    { id: "18", content: "Александра Махровая — архитектор и градостроитель" },
    { id: "20", content: "Содействие сохранению и популяризации культурного наследия" },
];

const correctMapping: Record<string, SectionKey> = {
    "1": "goals",
    "2": "goals",
    "20": "goals",
    "3": "tasks",
    "4": "tasks",
    "5": "tasks",
    "7": "results",
    "8": "results",
    "9": "results",
    "19": "results",
    "10": "partners",
    "11": "partners",
    "12": "partners",
    "16": "persons",
    "17": "persons",
    "18": "persons",
};

function shuffleArray<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export default function PresCultureSingle() {
    const [queue, setQueue] = useState<Item[]>([]);
    const [sections, setSections] = useState<Record<SectionKey, Item[]>>({
        goals: [],
        tasks: [],
        partners: [],
        results: [],
        persons: [],
    });
    const [feedback, setFeedback] = useState<"none" | "correct" | "wrong">("none");

    useEffect(() => {
        setQueue(shuffleArray(allItems));
    }, []);

    const currentItem = queue[0];

    function onDragEnd(result: DropResult) {
        const { destination } = result;
        if (!destination || !currentItem) return;

        const sectionKey = destination.droppableId as SectionKey;

        if (correctMapping[currentItem.id] !== sectionKey) {
            setFeedback("wrong");
            setTimeout(() => setFeedback("none"), 500);
            return;
        }

        setFeedback("correct");
        setTimeout(() => setFeedback("none"), 300);

        setSections((prev) => ({
            ...prev,
            [sectionKey]: [...prev[sectionKey], currentItem],
        }));

        setQueue((prev) => prev.slice(1));
    }

    function resetGame() {
        setQueue(shuffleArray(allItems));
        setSections({
            goals: [],
            tasks: [],
            partners: [],
            results: [],
            persons: [],
        });
        setFeedback("none");
    }

    return (
        <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
            {/* Вводный академичный текст */}
            <section className="preTask">
                <div className="preTask_text">
                    <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Проект "Сохранённая культура"</h2>
                    <p>
                        Добро пожаловать в интерактивный модуль, посвящённый российскому частному проекту
                        <strong> «Сохраненная культура»</strong>. Рекомендуем ознакомиться с основными
                        материалами на официальном сайте проекта{" "}
                        <a
                            href="https://prescult.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2196f3", textDecoration: "underline" }}
                        >
                            PresCult.ru
                        </a>{" "}
                        и на странице Википедии о{" "}
                        <a
                            href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D1%91%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2196f3", textDecoration: "underline" }}
                        >
                            Сохранённой культуре
                        </a>.
                    </p>
                    <p>
                        В данном упражнении вам предстоит распределить ключевые понятия по тематическим
                        разделам: <em>Цели</em>, <em>Задачи</em>, <em>Партнёры</em>, <em>Персоны</em> и <em>Проекты</em>.
                        Для этого перетащите карточки с понятиями из блока «Понятия» в нужные категории.
                    </p>
                    <p>
                        После завершения размещения нажмите кнопку «Проверить ответы», чтобы оценить правильность
                        распределения. Вы можете изменить своё решение до проверки.
                    </p>
                    <p>
                        Также на сайте представлен блок <strong>«Персоны»</strong>, где вы можете ознакомиться с
                        деятелями культуры — учёными, художниками, архитекторами и другими интеллектуалами,
                        чьи достижения проект стремится сохранить.
                    </p>
                </div>
            </section>


            <h2>Распределите понятия</h2>

            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{ height: 150, marginBottom: 30 }}>
                    <Droppable droppableId="current" direction="horizontal" isDropDisabled={true}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {currentItem ? (
                                        <Draggable draggableId={currentItem.id} index={0} key={currentItem.id}>
                                            {(prov) => (
                                                <div
                                                    ref={prov.innerRef}
                                                    {...prov.draggableProps}
                                                    {...prov.dragHandleProps}
                                                >
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 30 }}
                                                        transition={{ duration: 0.3 }}
                                                        style={{
                                                            padding: 12,
                                                            backgroundColor:
                                                                feedback === "wrong"
                                                                    ? "#ffcccc"
                                                                    : feedback === "correct"
                                                                        ? "#ccffcc"
                                                                        : "#f0f0f0",
                                                            borderRadius: 8,
                                                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                            fontSize: 16,
                                                            width: 300,
                                                            textAlign: "center",
                                                            transition: "background-color 0.3s",
                                                        }}
                                                    >
                                                        {currentItem.content}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ) : (
                                        <motion.button
                                            key="restart"
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                            onClick={resetGame}
                                            style={{
                                                padding: "10px 20px",
                                                fontSize: 16,
                                                borderRadius: 8,
                                                backgroundColor: "#0077cc",
                                                color: "#fff",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Начать сначала
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: 20,
                    }}
                >
                    {(Object.keys(sectionNames) as SectionKey[]).map((sectionKey) => (
                        <Droppable droppableId={sectionKey} key={sectionKey}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{
                                        minHeight: 120,
                                        backgroundColor: "#f9f9f9",
                                        border: "2px solid #0077cc",
                                        borderRadius: 8,
                                        padding: 10,
                                    }}
                                >
                                    <strong>{sectionNames[sectionKey]}</strong>
                                    <ul style={{ marginTop: 10, padding: 0, listStyle: "none" }}>
                                        {sections[sectionKey].map((item) => (
                                            <li
                                                key={item.id}
                                                style={{
                                                    backgroundColor: "#c8e6c9",
                                                    marginBottom: 4,
                                                    padding: "4px 8px",
                                                    borderRadius: 4,
                                                    fontSize: 14,
                                                }}
                                            >
                                                {item.content}
                                            </li>
                                        ))}
                                    </ul>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {queue.length === 0 && (
                <div style={{ marginTop: 30 }}>
                    <button onClick={resetGame} style={{ padding: "8px 16px" }}>
                        Начать сначала
                    </button>
                </div>
            )}
        </div>
    );
}
