const player = {
  x: 150,
  y: 550,
  w: 140,
  h: 180,
  speed: 5.5,
  hp: 100,
  greyHp: 0,
  stamina: 100,
  maxStamina: 100,
  staminaRegen: 0.25,
  dir: "right",
  isMoving: false,
  isAtk: false,
  atkFrame: 0,
  atkType: 1,
  atkReady: true,
  isParrying: false,
  parryState: "none",
  isCountering: false,
  parryReady: true,
  vy: 0,
  vx: 0,
  gravity: 0.9,
  jumpPower: -26,
  isJumping: false,
  groundY: 550,
  isPreparingJump: false,
  isAirAtk: false,
  airAtkReady: true,
  jumpDelay: false,
  isFrozen: false,
  hasDealtDamage: false,
  innerEnergy: 0,
  isAwakened: false,
  lastEnergyDrop: 0,
  isCastingQ: false,
  lastGreyHpTime: 0,
};

function startParrySequence() {
  player.isParrying = true;
  player.parryReady = false;
  player.parryState = "start";
  setTimeout(() => {
    if (player.isParrying) player.parryState = "main";
  }, 200);
  setTimeout(() => {
    player.isParrying = false;
    player.parryState = "none";
  }, 800);
  setTimeout(() => {
    player.parryReady = true;
  }, 2800);
}
function resetGame() {
  // Lệnh này tương đương với việc nhấn F5 trên trình duyệt
  location.reload();
}
