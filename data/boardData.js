export function generateBoardData() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const name = `Board_${timestamp}_${random}`;
  const desc = "Board generado automaticamente";

  return { name, desc };
}
