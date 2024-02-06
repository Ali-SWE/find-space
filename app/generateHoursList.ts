function generateHoursList(): string[] {
  const hours: string[] = [];
    for (let i = 7; i < 22; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(formattedHour + ':00');
    }
  return hours;
}

export default generateHoursList;