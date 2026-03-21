const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
  if (
    (e.code === "ArrowUp" || e.code === "Space" || e.code === "KeyW") &&
    !player.isJumping &&
    !player.isPreparingJump &&
    !player.jumpDelay &&
    player.hp > 0
  ) {
    player.isPreparingJump = true;
    setTimeout(() => {
      player.isPreparingJump = false;
      player.isJumping = true;
      player.vy = player.jumpPower;
      player.jumpDelay = true;
      setTimeout(() => (player.jumpDelay = false), 800);
    }, 150);
  }
  // File: dieu_khien.js
  // Tìm đoạn xử lý KeyF trong dieu_khien.js
  // Tìm đoạn xử lý KeyF trong dieu_khien.js và thay thế bằng:
  if (e.code === "KeyF" && !player.isAwakened) {
    // Yêu cầu tích đủ ít nhất 5 cục nội năng (ô vàng)
    if (player.innerEnergy >= 5) {
      player.isAwakened = true;
      player.lastEnergyDrop = Date.now(); // Lưu thời điểm bắt đầu hóa thần
      console.log("Đã hóa Thần!");

      if (typeof vIdle !== "undefined") vIdle.play();
      if (typeof vWalk !== "undefined") vWalk.play();
    } else {
      console.log("Chưa đủ nội năng! Cần 5 cục.");
    }
  }
  if (
    e.code === "KeyQ" &&
    player.isAwakened &&
    !player.isCastingQ &&
    player.stamina >= 60
  ) {
    player.isCastingQ = true;
    player.stamina -= 60;
    setTimeout(() => {
      projectiles.push({
        x: player.dir === "right" ? player.x + 80 : player.x - 120, // Chỉnh lại tọa độ xuất hiện cho cân đối
        y: player.y - 20, // Nâng cao lên một chút vì kiếm to hơn
        w: 300, // Tăng chiều rộng (cũ là 160)
        h: 200, // Tăng chiều cao (cũ là 100)
        speed: player.dir === "right" ? 8 : -8, // Giảm tốc độ để bay chậm hơn (cũ là 14)
        dist: 0,
        maxDist: canvas.width * 0.8, // Cho bay xa hơn để nhìn rõ độ đẹp
        alpha: 1,
        dir: player.dir,
      });
      player.isCastingQ = false;
    }, 300);
  }
  if (
    (e.code === "ShiftLeft" || e.code === "ShiftRight") &&
    player.parryReady &&
    !player.isAtk &&
    player.stamina >= 15
  )
    startParrySequence();
});

window.addEventListener("keyup", (e) => (keys[e.code] = false));

canvas.addEventListener("mousedown", () => {
  // 1. Kiểm tra các điều kiện cơ bản không cho phép tấn công
  if (
    player.hp <= 0 ||
    !player.atkReady ||
    player.isCastingQ ||
    player.isPreparingJump
  )
    return;

  // 2. Xử lý logic NHẢY CHÉM
  if (player.isJumping) {
    let airAtkCost = 30; // Tỷ lệ hao mana khi nhảy chém

    // Kiểm tra Mana và Thời gian hồi (3 giây)
    if (player.stamina < airAtkCost || !player.airAtkReady) {
      if (!player.airAtkReady) console.log("Nhảy chém đang hồi chiêu (3s)...");
      return;
    }

    // Thực hiện trừ tài nguyên và khóa chiêu
    player.stamina -= airAtkCost;
    player.isAirAtk = true;
    player.atkReady = false;
    player.hasDealtDamage = false;
    player.airAtkReady = false; // Bắt đầu tính delay 3s

    // Kết thúc động tác chém sau 0.5s
    setTimeout(() => {
      player.isAirAtk = false;
      player.atkReady = true;
    }, 500);

    // Mở lại khả năng nhảy chém sau 3s (3000ms)
    setTimeout(() => {
      player.airAtkReady = true;
      console.log("Nhảy chém đã hồi xong!");
    }, 3000);
  }
  // 3. Xử lý logic CHÉM DƯỚI ĐẤT (Giữ nguyên hoặc chỉnh sửa mana)
  else {
    let groundCost = player.isAwakened ? 40 : 25;
    if (player.stamina < groundCost) return;

    player.stamina -= groundCost;
    player.isAtk = true;
    player.atkReady = false;
    player.hasDealtDamage = false;
    player.atkType = Math.random() < 0.2 ? 2 : 1;

    setTimeout(() => (player.atkFrame = 1), 100);
    setTimeout(() => {
      player.isAtk = false;
      player.atkFrame = 0;
      player.atkReady = true;
    }, 300);
  }
});
