const sources = {
  game_map: "https://img.upanhnhanh.com/6b1bd52902461c5f08a783a8d216dbef",
  p_idle: "https://img.upanhnhanh.com/152117ec3ad3ac2059f641db5ef66a60",
  p_walk1: "https://img.upanhnhanh.com/c3750a07219d4a43680bce5d2890e853",
  p_walk2: "https://img.upanhnhanh.com/f5530191fa41ba5f58e5b00ab52b18cf",
  p_atk1: "https://img.upanhnhanh.com/c2a76b286e5d8aa92642d4222fb7fcd4",
  p_atk2: "https://img.upanhnhanh.com/286673cacaf1c6ec80b14a6e0228886e",
  p_atk_alt: "https://img.upanhnhanh.com/2d096eeaf707917d6659b2762f92db63",
  p_parry_start: "https://img.upanhnhanh.com/f8db180eaae14c3ae2530bb123a012ec",
  p_parry_main: "https://img.upanhnhanh.com/25f06a6b0c8930efa1cdb72ff2ce8dbb",
  p_counter: "https://img.upanhnhanh.com/eaf5cde6a2b5e8381d0f0c63152da762",
  p_idleL: "https://img.upanhnhanh.com/d13420c21469875e5e39541f1bd30b36",
  p_walkL1: "https://img.upanhnhanh.com/f6501548c06a80e73aa29c2e5d9219f6",
  p_walkL2: "https://img.upanhnhanh.com/96f89182a98a30428b42b4fb1ac296c7",
  p_awaken_atk: "https://img.upanhnhanh.com/66609fbb55849f6090789612fb815730",
  p_cast_q: "https://img.upanhnhanh.com/5c80476188ce1bc984139ee067520a64",
  p_projectile: "https://img.upanhnhanh.com/15d091ab706dcb8f58f3eadca5388698",
  p_jump_prep: "https://img.upanhnhanh.com/1f8af2e1507d956218d08aa2eafd6081",
  p_jump_air: "https://img.upanhnhanh.com/7d2266b35a40a4ee820adf32e8fb12d1",
  p_jump_atk: "https://img.upanhnhanh.com/5a5ee1ad62ad5e0427eaa37d30015740",
  p_awaken_jump_prep:
    "https://img.upanhnhanh.com/aaaf94f72f4e42b1f33a846da521a5e4",
  p_awaken_jump_air:
    "https://img.upanhnhanh.com/480d53ff8bcf3757412b2b09841f79ef",
  p_awaken_jump_atk:
    "https://img.upanhnhanh.com/1260e6fc88822a1d49e9653b712817fb",
  b_idle: "https://img.upanhnhanh.com/4a116373ebabb92ba079d7c2055ff0a3",
  b_walk: "https://img.upanhnhanh.com/5196fdc12d786a2e780f223b8fc8cdb5",
  b_charge: "https://img.upanhnhanh.com/7a59a5388bd9645f3ab2dc6a058181ad",
  b_atk: "https://img.upanhnhanh.com/465333643c5741ab8918b0616e6434b0",
  b_armor: "https://img.upanhnhanh.com/bcf9af0c7d86bc69654b8a495715766c",
  b_skill_atk: "https://img.upanhnhanh.com/1a792fdd923eca7f9e13ea0fd4edee6b",
};

const imgs = {};
let loaded = 0;
for (let k in sources) {
  imgs[k] = new Image();
  imgs[k].src = sources[k];
  imgs[k].onload = () => loaded++;
}
