import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css';
import './style.css';
import {ComicsDetail, IndexPage, UserProfilePage} from './pages';

const rootElement = document.createElement('div');
document.body.append(rootElement);
const app = createRoot(rootElement);

/**
 * тут основна точка входу в реакт
 * компонент роутінгу описує як обробляти різни запити
 * якщо шлях містить `about` - ми завантажуємо компонент UserProfilePage
 * "*" означає будь який шлях, він оброблюється останнім і обробить будь який запит, якщо
 * у попередніх маршрутів не було збігів.
 */
app.render(
<BrowserRouter>
  <Routes>
    <Route path="detail" element={<ComicsDetail />} />
    <Route path="about" element={<UserProfilePage />} />
    <Route path="*" element={<IndexPage />} />
  </Routes>
</BrowserRouter>
);
