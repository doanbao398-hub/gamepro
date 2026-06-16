const boss = {
  x: 1200,
  y: 480,
  w: 200,
  h: 250,
  speed: 3.8,
  hp: 1000,
  maxHp: 1000,
  greyHp: 0,
  dir: "left",
  state: "idle",
  atkRange: 180,
  cooldown: false,
  skillCooldown: false,
  hasDealtDamage: false,
  vx: 0,
  isStunned: false,
  isShielded: false,
  shieldAlpha: 0,
  canShield: true,
  lastHitTime: 0,
};

function toggleBossShield() {
  if (
    !boss.canShield ||
    boss.hp <= 0 ||
    boss.isStunned ||
    boss.state === "skill"
  )
    return;
  boss.isShielded = true;
  boss.canShield = false;
  boss.shieldAlpha = 0.4;
  setTimeout(() => {
    let fadeOut = setInterval(() => {
      boss.shieldAlpha -= 0.02;
      if (boss.shieldAlpha <= 0) {
        boss.shieldAlpha = 0;
        boss.isShielded = false;
        clearInterval(fadeOut);
        setTimeout(() => {
          boss.canShield = true;
        }, 4000);
      }
    }, 30);
  }, 2400);
}

function applyDamageToBoss(dmg) {
  if (typeof screenShake !== "undefined") screenShake = 8;
  if (boss.isShielded) {
    boss.greyHp += dmg;
    boss.hp -= dmg;
    boss.lastHitTime = Date.now();
  } else {
    boss.hp -= dmg;
    if (boss.canShield && Math.random() < 0.4) toggleBossShield();
  }
  if (player.isAwakened && player.hp < 100) {
    player.hp += dmg * 0.05;
    if (player.hp > 100) player.hp = 100;
  }
}

function triggerBossSkill() {
  if (
    boss.hp <= 0 ||
    boss.isStunned ||
    boss.state === "skill" ||
    boss.skillCooldown
  )
    return;
  boss.state = "skill";
  boss.isShielded = false;
  boss.shieldAlpha = 0;
  boss.skillCooldown = true;
  vBossSkill.currentTime = 0;
  vBossSkill.play();
  let fired = false;
  const check = setInterval(() => {
    if (!fired && vBossSkill.currentTime > vBossSkill.duration * 0.8) {
      bossProjectiles.push({
        x: boss.dir === "left" ? boss.x : boss.x + boss.w,
        y: boss.y - 20,
        w: 420,
        h: 250,
        speed: boss.dir === "left" ? -5 : 6,
        dist: 0,
        maxDist: canvas.width * 0.7,
        dir: boss.dir,
      });
      fired = true;
    }
    if (vBossSkill.ended) {
      clearInterval(check);
      boss.state = "idle";
      setTimeout(() => {
        boss.skillCooldown = false;
      }, 8000);
    }
  }, 16);
}
