import { events } from './events.js';

const root = document.getElementById('root');

const renderEvents = () => {
  const container = document.createElement('div');

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

  const button = document.createElement('button');
  button.textContent = '+ إضافة فعالية جديدة';
  container.appendChild(button);

  root.appendChild(container);
};

renderEvents();
