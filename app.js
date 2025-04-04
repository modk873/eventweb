import { events, addEvent } from './events.js';

const root = document.getElementById('root');

function renderEvents() {
  const container = document.createElement('div');
  root.innerHTML = "";

  const title = document.createElement('h1');
  title.textContent = '📅 EventSync – تنظيم فعاليات ذكي';
  container.appendChild(title);

  const grid = document.createElement('div');
  grid.style.display = 'flex';
  grid.style.flexWrap = 'wrap';
  grid.style.justifyContent = 'center';

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    card.innerHTML = `
      <h2>${event.title}</h2>
      <p class="event-details">📅 ${event.date} – ${event.time}</p>
      <p class="event-details">📍 ${event.location}</p>
      <p class="event-details">👥 ${event.attendees} مشارك</p>
      <p class="event-details">🎤 المتحدثون: ${event.speakers.join(', ')}</p>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);

  // نموذج إضافة فعالية
  const form = document.createElement('form');
  form.innerHTML = `
    <h3>➕ أضف فعالية جديدة</h3>
    <input type="text" placeholder="اسم الفعالية" id="title" required />
    <input type="date" id="date" required />
    <input type="time" id="time" required />
    <input type="text" placeholder="المكان" id="location" required />
    <input type="text" placeholder="المتحدثون (مفصولة بفاصلة)" id="speakers" required />
    <input type="number" placeholder="عدد الحضور" id="attendees" required />
    <button type="submit">إضافة</button>
  `;
  form.onsubmit = e => {
    e.preventDefault();
    const newEvent = {
      title: form.title.value,
      date: form.date.value,
      time: form.time.value,
      location: form.location.value,
      speakers: form.speakers.value.split(',').map(s => s.trim()),
      attendees: parseInt(form.attendees.value),
    };
    addEvent(newEvent);
    renderEvents(); // إعادة تحميل الصفحة لعرض الفعالية الجديدة
  };

  form.querySelectorAll('input').forEach(input => {
    input.style.margin = '5px';
    input.style.padding = '10px';
    input.style.borderRadius = '0.5rem';
    input.style.border = '1px solid #ccc';
    input.style.width = '90%';
    input.style.maxWidth = '400px';
  });

  container.appendChild(form);
  root.appendChild(container);
}

renderEvents();
