export let events = [
  {
    title: "مؤتمر الابتكار التقني",
    date: "2025-05-15",
    time: "10:00 صباحاً",
    location: "مركز قطر للمؤتمرات",
    speakers: ["د. أحمد يوسف", "م. سارة خالد"],
    attendees: 120,
  },
];

export function addEvent(newEvent) {
  events.push(newEvent);
}