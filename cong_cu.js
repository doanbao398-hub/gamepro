function drawVideoTransparent(video) {
  offCtx.clearRect(0, 0, 180, 180);
  offCtx.drawImage(video, 0, 0, 180, 180);
  let frame = offCtx.getImageData(0, 0, 180, 180);
  for (let i = 0; i < frame.data.length / 4; i++) {
    let r = frame.data[i * 4 + 0],
      g = frame.data[i * 4 + 1],
      b = frame.data[i * 4 + 2];
    if (g > 100 && g > r * 1.2 && g > b * 1.2) frame.data[i * 4 + 3] = 0;
  }
  offCtx.putImageData(frame, 0, 0);
  return offscreenCanvas;
}

function drawBossVideoTransparent(video) {
  bossOffCtx.clearRect(0, 0, 225, 225);
  bossOffCtx.drawImage(video, 0, 0, 225, 225);
  let frame = bossOffCtx.getImageData(0, 0, 225, 225);
  for (let i = 0; i < frame.data.length / 4; i++) {
    let r = frame.data[i * 4 + 0],
      g = frame.data[i * 4 + 1],
      b = frame.data[i * 4 + 2];
    if (g > 100 && g > r * 1.2 && g > b * 1.2) frame.data[i * 4 + 3] = 0;
  }
  bossOffCtx.putImageData(frame, 0, 0);
  return bossOffscreenCanvas;
}

function checkRectCollision(r1, r2) {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.y + r1.h > r2.y
  );
}
