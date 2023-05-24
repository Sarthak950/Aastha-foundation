(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerpolicy && (a.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = t(i);
    fetch(i.href, a);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Da = "144",
  Is = 0,
  Fa = 1,
  Fs = 2,
  Jr = 1,
  Ns = 2,
  Zn = 3,
  On = 0,
  mt = 1,
  Ot = 2,
  Kt = 0,
  Un = 1,
  Na = 2,
  Ua = 3,
  za = 4,
  Us = 5,
  Fn = 100,
  zs = 101,
  Os = 102,
  Oa = 103,
  Ba = 104,
  Bs = 200,
  Gs = 201,
  Vs = 202,
  ks = 203,
  Qr = 204,
  es = 205,
  Ws = 206,
  Hs = 207,
  qs = 208,
  Xs = 209,
  Ys = 210,
  js = 0,
  Zs = 1,
  $s = 2,
  Ma = 3,
  Ks = 4,
  Js = 5,
  Qs = 6,
  eo = 7,
  ts = 0,
  to = 1,
  no = 2,
  Gt = 0,
  io = 1,
  ao = 2,
  ro = 3,
  so = 4,
  oo = 5,
  ns = 300,
  Bn = 301,
  Gn = 302,
  Sa = 303,
  ya = 304,
  Pi = 306,
  wa = 1e3,
  vt = 1001,
  Ta = 1002,
  tt = 1003,
  Ga = 1004,
  Va = 1005,
  ut = 1006,
  co = 1007,
  Ii = 1008,
  pn = 1009,
  fo = 1010,
  lo = 1011,
  is = 1012,
  uo = 1013,
  fn = 1014,
  ln = 1015,
  Kn = 1016,
  ho = 1017,
  po = 1018,
  zn = 1020,
  mo = 1021,
  go = 1022,
  At = 1023,
  bo = 1024,
  _o = 1025,
  un = 1026,
  Vn = 1027,
  xo = 1028,
  vo = 1029,
  Mo = 1030,
  So = 1031,
  yo = 1033,
  Vi = 33776,
  ki = 33777,
  Wi = 33778,
  Hi = 33779,
  ka = 35840,
  Wa = 35841,
  Ha = 35842,
  qa = 35843,
  wo = 36196,
  Xa = 37492,
  Ya = 37496,
  ja = 37808,
  Za = 37809,
  $a = 37810,
  Ka = 37811,
  Ja = 37812,
  Qa = 37813,
  er = 37814,
  tr = 37815,
  nr = 37816,
  ir = 37817,
  ar = 37818,
  rr = 37819,
  sr = 37820,
  or = 37821,
  cr = 36492,
  mn = 3e3,
  ze = 3001,
  To = 3200,
  Eo = 3201,
  Ao = 0,
  Co = 1,
  Ut = "srgb",
  dn = "srgb-linear",
  qi = 7680,
  Lo = 519,
  fr = 35044,
  lr = "300 es",
  Ea = 1035;
class Wn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const a = i.indexOf(t);
      a !== -1 && i.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let a = 0, o = i.length; a < o; a++) i[a].call(this, e);
      e.target = null;
    }
  }
}
const Ze = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Xi = Math.PI / 180,
  dr = 180 / Math.PI;
function Qn() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Ze[r & 255] +
    Ze[(r >> 8) & 255] +
    Ze[(r >> 16) & 255] +
    Ze[(r >> 24) & 255] +
    "-" +
    Ze[e & 255] +
    Ze[(e >> 8) & 255] +
    "-" +
    Ze[((e >> 16) & 15) | 64] +
    Ze[(e >> 24) & 255] +
    "-" +
    Ze[(t & 63) | 128] +
    Ze[(t >> 8) & 255] +
    "-" +
    Ze[(t >> 16) & 255] +
    Ze[(t >> 24) & 255] +
    Ze[n & 255] +
    Ze[(n >> 8) & 255] +
    Ze[(n >> 16) & 255] +
    Ze[(n >> 24) & 255]
  ).toLowerCase();
}
function ct(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Do(r, e) {
  return ((r % e) + e) % e;
}
function Yi(r, e, t) {
  return (1 - t) * r + t * e;
}
function ur(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Aa(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function si(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function rt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Fe {
  constructor(e = 0, t = 0) {
    (Fe.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      a = this.x - e.x,
      o = this.y - e.y;
    return (this.x = a * n - o * i + e.x), (this.y = a * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class pt {
  constructor() {
    (pt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, a, o, s, f, c) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[1] = i),
      (d[2] = s),
      (d[3] = t),
      (d[4] = a),
      (d[5] = f),
      (d[6] = n),
      (d[7] = o),
      (d[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      a = this.elements,
      o = n[0],
      s = n[3],
      f = n[6],
      c = n[1],
      d = n[4],
      u = n[7],
      h = n[2],
      m = n[5],
      b = n[8],
      p = i[0],
      l = i[3],
      _ = i[6],
      M = i[1],
      T = i[4],
      w = i[7],
      y = i[2],
      A = i[5],
      N = i[8];
    return (
      (a[0] = o * p + s * M + f * y),
      (a[3] = o * l + s * T + f * A),
      (a[6] = o * _ + s * w + f * N),
      (a[1] = c * p + d * M + u * y),
      (a[4] = c * l + d * T + u * A),
      (a[7] = c * _ + d * w + u * N),
      (a[2] = h * p + m * M + b * y),
      (a[5] = h * l + m * T + b * A),
      (a[8] = h * _ + m * w + b * N),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      a = e[3],
      o = e[4],
      s = e[5],
      f = e[6],
      c = e[7],
      d = e[8];
    return (
      t * o * d - t * s * c - n * a * d + n * s * f + i * a * c - i * o * f
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      a = e[3],
      o = e[4],
      s = e[5],
      f = e[6],
      c = e[7],
      d = e[8],
      u = d * o - s * c,
      h = s * f - d * a,
      m = c * a - o * f,
      b = t * u + n * h + i * m;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / b;
    return (
      (e[0] = u * p),
      (e[1] = (i * c - d * n) * p),
      (e[2] = (s * n - i * o) * p),
      (e[3] = h * p),
      (e[4] = (d * t - i * f) * p),
      (e[5] = (i * a - s * t) * p),
      (e[6] = m * p),
      (e[7] = (n * f - c * t) * p),
      (e[8] = (o * t - n * a) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, a, o, s) {
    const f = Math.cos(a),
      c = Math.sin(a);
    return (
      this.set(
        n * f,
        n * c,
        -n * (f * o + c * s) + o + e,
        -i * c,
        i * f,
        -i * (-c * o + f * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      a = i[0],
      o = i[3],
      s = i[6],
      f = i[1],
      c = i[4],
      d = i[7];
    return (
      (i[0] = t * a + n * f),
      (i[3] = t * o + n * c),
      (i[6] = t * s + n * d),
      (i[1] = -n * a + t * f),
      (i[4] = -n * o + t * c),
      (i[7] = -n * s + t * d),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function as(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function Ri(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function hn(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Li(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const ji = { [Ut]: { [dn]: hn }, [dn]: { [Ut]: Li } },
  gt = {
    legacyMode: !0,
    get workingColorSpace() {
      return dn;
    },
    set workingColorSpace(r) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (r, e, t) {
      if (this.legacyMode || e === t || !e || !t) return r;
      if (ji[e] && ji[e][t] !== void 0) {
        const n = ji[e][t];
        return (r.r = n(r.r)), (r.g = n(r.g)), (r.b = n(r.b)), r;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    },
  },
  rs = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ke = { r: 0, g: 0, b: 0 },
  bt = { h: 0, s: 0, l: 0 },
  oi = { h: 0, s: 0, l: 0 };
function Zi(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
function ci(r, e) {
  return (e.r = r.r), (e.g = r.g), (e.b = r.b), e;
}
class Ie {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ut) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      gt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = dn) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      gt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = dn) {
    if (((e = Do(e, 1)), (t = ct(t, 0, 1)), (n = ct(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - a;
      (this.r = Zi(o, a, e + 1 / 3)),
        (this.g = Zi(o, a, e)),
        (this.b = Zi(o, a, e - 1 / 3));
    }
    return gt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ut) {
    function n(a) {
      a !== void 0 &&
        parseFloat(a) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let a;
      const o = i[1],
        s = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
              s
            ))
          )
            return (
              (this.r = Math.min(255, parseInt(a[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(a[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(a[3], 10)) / 255),
              gt.toWorkingColorSpace(this, t),
              n(a[4]),
              this
            );
          if (
            (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
              s
            ))
          )
            return (
              (this.r = Math.min(100, parseInt(a[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(a[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(a[3], 10)) / 100),
              gt.toWorkingColorSpace(this, t),
              n(a[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
              s
            ))
          ) {
            const f = parseFloat(a[1]) / 360,
              c = parseFloat(a[2]) / 100,
              d = parseFloat(a[3]) / 100;
            return n(a[4]), this.setHSL(f, c, d, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const a = i[1],
        o = a.length;
      if (o === 3)
        return (
          (this.r = parseInt(a.charAt(0) + a.charAt(0), 16) / 255),
          (this.g = parseInt(a.charAt(1) + a.charAt(1), 16) / 255),
          (this.b = parseInt(a.charAt(2) + a.charAt(2), 16) / 255),
          gt.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(a.charAt(0) + a.charAt(1), 16) / 255),
          (this.g = parseInt(a.charAt(2) + a.charAt(3), 16) / 255),
          (this.b = parseInt(a.charAt(4) + a.charAt(5), 16) / 255),
          gt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ut) {
    const n = rs[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = hn(e.r)), (this.g = hn(e.g)), (this.b = hn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Li(e.r)), (this.g = Li(e.g)), (this.b = Li(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ut) {
    return (
      gt.fromWorkingColorSpace(ci(this, ke), e),
      (ct(ke.r * 255, 0, 255) << 16) ^
        (ct(ke.g * 255, 0, 255) << 8) ^
        (ct(ke.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = dn) {
    gt.fromWorkingColorSpace(ci(this, ke), t);
    const n = ke.r,
      i = ke.g,
      a = ke.b,
      o = Math.max(n, i, a),
      s = Math.min(n, i, a);
    let f, c;
    const d = (s + o) / 2;
    if (s === o) (f = 0), (c = 0);
    else {
      const u = o - s;
      switch (((c = d <= 0.5 ? u / (o + s) : u / (2 - o - s)), o)) {
        case n:
          f = (i - a) / u + (i < a ? 6 : 0);
          break;
        case i:
          f = (a - n) / u + 2;
          break;
        case a:
          f = (n - i) / u + 4;
          break;
      }
      f /= 6;
    }
    return (e.h = f), (e.s = c), (e.l = d), e;
  }
  getRGB(e, t = dn) {
    return (
      gt.fromWorkingColorSpace(ci(this, ke), t),
      (e.r = ke.r),
      (e.g = ke.g),
      (e.b = ke.b),
      e
    );
  }
  getStyle(e = Ut) {
    return (
      gt.fromWorkingColorSpace(ci(this, ke), e),
      e !== Ut
        ? `color(${e} ${ke.r} ${ke.g} ${ke.b})`
        : `rgb(${(ke.r * 255) | 0},${(ke.g * 255) | 0},${(ke.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(bt),
      (bt.h += e),
      (bt.s += t),
      (bt.l += n),
      this.setHSL(bt.h, bt.s, bt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(bt), e.getHSL(oi);
    const n = Yi(bt.h, oi.h, t),
      i = Yi(bt.s, oi.s, t),
      a = Yi(bt.l, oi.l, t);
    return this.setHSL(n, i, a), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ie.NAMES = rs;
let vn;
class ss {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      vn === void 0 && (vn = Ri("canvas")),
        (vn.width = e.width),
        (vn.height = e.height);
      const n = vn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = vn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Ri("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        a = i.data;
      for (let o = 0; o < a.length; o++) a[o] = hn(a[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(hn(t[n] / 255) * 255))
          : (t[n] = hn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class os {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = Qn()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let a;
      if (Array.isArray(i)) {
        a = [];
        for (let o = 0, s = i.length; o < s; o++)
          i[o].isDataTexture ? a.push($i(i[o].image)) : a.push($i(i[o]));
      } else a = $i(i);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function $i(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? ss.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ro = 0;
class St extends Wn {
  constructor(
    e = St.DEFAULT_IMAGE,
    t = St.DEFAULT_MAPPING,
    n = vt,
    i = vt,
    a = ut,
    o = Ii,
    s = At,
    f = pn,
    c = 1,
    d = mn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Ro++ }),
      (this.uuid = Qn()),
      (this.name = ""),
      (this.source = new os(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = a),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = f),
      (this.offset = new Fe(0, 0)),
      (this.repeat = new Fe(1, 1)),
      (this.center = new Fe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new pt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = d),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ns) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case wa:
          e.x = e.x - Math.floor(e.x);
          break;
        case vt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ta:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case wa:
          e.y = e.y - Math.floor(e.y);
          break;
        case vt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ta:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = ns;
class je {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (je.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      a = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * a),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * a),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * a),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * a),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, a;
    const f = e.elements,
      c = f[0],
      d = f[4],
      u = f[8],
      h = f[1],
      m = f[5],
      b = f[9],
      p = f[2],
      l = f[6],
      _ = f[10];
    if (
      Math.abs(d - h) < 0.01 &&
      Math.abs(u - p) < 0.01 &&
      Math.abs(b - l) < 0.01
    ) {
      if (
        Math.abs(d + h) < 0.1 &&
        Math.abs(u + p) < 0.1 &&
        Math.abs(b + l) < 0.1 &&
        Math.abs(c + m + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2,
        w = (m + 1) / 2,
        y = (_ + 1) / 2,
        A = (d + h) / 4,
        N = (u + p) / 4,
        x = (b + l) / 4;
      return (
        T > w && T > y
          ? T < 0.01
            ? ((n = 0), (i = 0.707106781), (a = 0.707106781))
            : ((n = Math.sqrt(T)), (i = A / n), (a = N / n))
          : w > y
          ? w < 0.01
            ? ((n = 0.707106781), (i = 0), (a = 0.707106781))
            : ((i = Math.sqrt(w)), (n = A / i), (a = x / i))
          : y < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (a = 0))
          : ((a = Math.sqrt(y)), (n = N / a), (i = x / a)),
        this.set(n, i, a, t),
        this
      );
    }
    let M = Math.sqrt(
      (l - b) * (l - b) + (u - p) * (u - p) + (h - d) * (h - d)
    );
    return (
      Math.abs(M) < 0.001 && (M = 1),
      (this.x = (l - b) / M),
      (this.y = (u - p) / M),
      (this.z = (h - d) / M),
      (this.w = Math.acos((c + m + _ - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class gn extends Wn {
  constructor(e, t, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new je(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new je(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new St(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ut),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new os(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class cs extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = tt),
      (this.minFilter = tt),
      (this.wrapR = vt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Po extends St {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = tt),
      (this.minFilter = tt),
      (this.wrapR = vt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class ei {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, a, o, s) {
    let f = n[i + 0],
      c = n[i + 1],
      d = n[i + 2],
      u = n[i + 3];
    const h = a[o + 0],
      m = a[o + 1],
      b = a[o + 2],
      p = a[o + 3];
    if (s === 0) {
      (e[t + 0] = f), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = u);
      return;
    }
    if (s === 1) {
      (e[t + 0] = h), (e[t + 1] = m), (e[t + 2] = b), (e[t + 3] = p);
      return;
    }
    if (u !== p || f !== h || c !== m || d !== b) {
      let l = 1 - s;
      const _ = f * h + c * m + d * b + u * p,
        M = _ >= 0 ? 1 : -1,
        T = 1 - _ * _;
      if (T > Number.EPSILON) {
        const y = Math.sqrt(T),
          A = Math.atan2(y, _ * M);
        (l = Math.sin(l * A) / y), (s = Math.sin(s * A) / y);
      }
      const w = s * M;
      if (
        ((f = f * l + h * w),
        (c = c * l + m * w),
        (d = d * l + b * w),
        (u = u * l + p * w),
        l === 1 - s)
      ) {
        const y = 1 / Math.sqrt(f * f + c * c + d * d + u * u);
        (f *= y), (c *= y), (d *= y), (u *= y);
      }
    }
    (e[t] = f), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, i, a, o) {
    const s = n[i],
      f = n[i + 1],
      c = n[i + 2],
      d = n[i + 3],
      u = a[o],
      h = a[o + 1],
      m = a[o + 2],
      b = a[o + 3];
    return (
      (e[t] = s * b + d * u + f * m - c * h),
      (e[t + 1] = f * b + d * h + c * u - s * m),
      (e[t + 2] = c * b + d * m + s * h - f * u),
      (e[t + 3] = d * b - s * u - f * h - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      a = e._z,
      o = e._order,
      s = Math.cos,
      f = Math.sin,
      c = s(n / 2),
      d = s(i / 2),
      u = s(a / 2),
      h = f(n / 2),
      m = f(i / 2),
      b = f(a / 2);
    switch (o) {
      case "XYZ":
        (this._x = h * d * u + c * m * b),
          (this._y = c * m * u - h * d * b),
          (this._z = c * d * b + h * m * u),
          (this._w = c * d * u - h * m * b);
        break;
      case "YXZ":
        (this._x = h * d * u + c * m * b),
          (this._y = c * m * u - h * d * b),
          (this._z = c * d * b - h * m * u),
          (this._w = c * d * u + h * m * b);
        break;
      case "ZXY":
        (this._x = h * d * u - c * m * b),
          (this._y = c * m * u + h * d * b),
          (this._z = c * d * b + h * m * u),
          (this._w = c * d * u - h * m * b);
        break;
      case "ZYX":
        (this._x = h * d * u - c * m * b),
          (this._y = c * m * u + h * d * b),
          (this._z = c * d * b - h * m * u),
          (this._w = c * d * u + h * m * b);
        break;
      case "YZX":
        (this._x = h * d * u + c * m * b),
          (this._y = c * m * u + h * d * b),
          (this._z = c * d * b - h * m * u),
          (this._w = c * d * u - h * m * b);
        break;
      case "XZY":
        (this._x = h * d * u - c * m * b),
          (this._y = c * m * u - h * d * b),
          (this._z = c * d * b + h * m * u),
          (this._w = c * d * u + h * m * b);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      a = t[8],
      o = t[1],
      s = t[5],
      f = t[9],
      c = t[2],
      d = t[6],
      u = t[10],
      h = n + s + u;
    if (h > 0) {
      const m = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / m),
        (this._x = (d - f) * m),
        (this._y = (a - c) * m),
        (this._z = (o - i) * m);
    } else if (n > s && n > u) {
      const m = 2 * Math.sqrt(1 + n - s - u);
      (this._w = (d - f) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (a + c) / m);
    } else if (s > u) {
      const m = 2 * Math.sqrt(1 + s - n - u);
      (this._w = (a - c) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (f + d) / m);
    } else {
      const m = 2 * Math.sqrt(1 + u - n - s);
      (this._w = (o - i) / m),
        (this._x = (a + c) / m),
        (this._y = (f + d) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ct(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      a = e._z,
      o = e._w,
      s = t._x,
      f = t._y,
      c = t._z,
      d = t._w;
    return (
      (this._x = n * d + o * s + i * c - a * f),
      (this._y = i * d + o * f + a * s - n * c),
      (this._z = a * d + o * c + n * f - i * s),
      (this._w = o * d - n * s - i * f - a * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      a = this._z,
      o = this._w;
    let s = o * e._w + n * e._x + i * e._y + a * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = a), this;
    const f = 1 - s * s;
    if (f <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * a + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(f),
      d = Math.atan2(c, s),
      u = Math.sin((1 - t) * d) / c,
      h = Math.sin(t * d) / c;
    return (
      (this._w = o * u + this._w * h),
      (this._x = n * u + this._x * h),
      (this._y = i * u + this._y * h),
      (this._z = a * u + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      a = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(a),
      n * Math.cos(a),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    (D.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(hr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(hr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * n + a[6] * i),
      (this.y = a[1] * t + a[4] * n + a[7] * i),
      (this.z = a[2] * t + a[5] * n + a[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      a = e.elements,
      o = 1 / (a[3] * t + a[7] * n + a[11] * i + a[15]);
    return (
      (this.x = (a[0] * t + a[4] * n + a[8] * i + a[12]) * o),
      (this.y = (a[1] * t + a[5] * n + a[9] * i + a[13]) * o),
      (this.z = (a[2] * t + a[6] * n + a[10] * i + a[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      a = e.x,
      o = e.y,
      s = e.z,
      f = e.w,
      c = f * t + o * i - s * n,
      d = f * n + s * t - a * i,
      u = f * i + a * n - o * t,
      h = -a * t - o * n - s * i;
    return (
      (this.x = c * f + h * -a + d * -s - u * -o),
      (this.y = d * f + h * -o + u * -a - c * -s),
      (this.z = u * f + h * -s + c * -o - d * -a),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i),
      (this.y = a[1] * t + a[5] * n + a[9] * i),
      (this.z = a[2] * t + a[6] * n + a[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      a = e.z,
      o = t.x,
      s = t.y,
      f = t.z;
    return (
      (this.x = i * f - a * s),
      (this.y = a * o - n * f),
      (this.z = n * s - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ki.copy(this).projectOnVector(e), this.sub(Ki);
  }
  reflect(e) {
    return this.sub(Ki.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ct(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ki = new D(),
  hr = new ei();
class ti {
  constructor(
    e = new D(1 / 0, 1 / 0, 1 / 0),
    t = new D(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      a = -1 / 0,
      o = -1 / 0,
      s = -1 / 0;
    for (let f = 0, c = e.length; f < c; f += 3) {
      const d = e[f],
        u = e[f + 1],
        h = e[f + 2];
      d < t && (t = d),
        u < n && (n = u),
        h < i && (i = h),
        d > a && (a = d),
        u > o && (o = u),
        h > s && (s = h);
    }
    return this.min.set(t, n, i), this.max.set(a, o, s), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      a = -1 / 0,
      o = -1 / 0,
      s = -1 / 0;
    for (let f = 0, c = e.count; f < c; f++) {
      const d = e.getX(f),
        u = e.getY(f),
        h = e.getZ(f);
      d < t && (t = d),
        u < n && (n = u),
        h < i && (i = h),
        d > a && (a = d),
        u > o && (o = u),
        h > s && (s = h);
    }
    return this.min.set(t, n, i), this.max.set(a, o, s), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = nn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const a = n.attributes.position;
        for (let o = 0, s = a.count; o < s; o++)
          nn.fromBufferAttribute(a, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(nn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Ji.copy(n.boundingBox),
          Ji.applyMatrix4(e.matrixWorld),
          this.union(Ji);
    const i = e.children;
    for (let a = 0, o = i.length; a < o; a++) this.expandByObject(i[a], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, nn),
      nn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Xn),
      fi.subVectors(this.max, Xn),
      Mn.subVectors(e.a, Xn),
      Sn.subVectors(e.b, Xn),
      yn.subVectors(e.c, Xn),
      Ht.subVectors(Sn, Mn),
      qt.subVectors(yn, Sn),
      an.subVectors(Mn, yn);
    let t = [
      0,
      -Ht.z,
      Ht.y,
      0,
      -qt.z,
      qt.y,
      0,
      -an.z,
      an.y,
      Ht.z,
      0,
      -Ht.x,
      qt.z,
      0,
      -qt.x,
      an.z,
      0,
      -an.x,
      -Ht.y,
      Ht.x,
      0,
      -qt.y,
      qt.x,
      0,
      -an.y,
      an.x,
      0,
    ];
    return !Qi(t, Mn, Sn, yn, fi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Qi(t, Mn, Sn, yn, fi))
      ? !1
      : (li.crossVectors(Ht, qt),
        (t = [li.x, li.y, li.z]),
        Qi(t, Mn, Sn, yn, fi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return nn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(nn).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Rt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Rt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Rt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Rt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Rt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Rt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Rt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Rt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Rt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Rt = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
  ],
  nn = new D(),
  Ji = new ti(),
  Mn = new D(),
  Sn = new D(),
  yn = new D(),
  Ht = new D(),
  qt = new D(),
  an = new D(),
  Xn = new D(),
  fi = new D(),
  li = new D(),
  rn = new D();
function Qi(r, e, t, n, i) {
  for (let a = 0, o = r.length - 3; a <= o; a += 3) {
    rn.fromArray(r, a);
    const s =
        i.x * Math.abs(rn.x) + i.y * Math.abs(rn.y) + i.z * Math.abs(rn.z),
      f = e.dot(rn),
      c = t.dot(rn),
      d = n.dot(rn);
    if (Math.max(-Math.max(f, c, d), Math.min(f, c, d)) > s) return !1;
  }
  return !0;
}
const Io = new ti(),
  pr = new D(),
  di = new D(),
  ea = new D();
class Fi {
  constructor(e = new D(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Io.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let a = 0, o = e.length; a < o; a++)
      i = Math.max(i, n.distanceToSquared(e[a]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    ea.subVectors(e, this.center);
    const t = ea.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(ea.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? di.set(0, 0, 1).multiplyScalar(e.radius)
        : di
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(pr.copy(e.center).add(di)),
      this.expandByPoint(pr.copy(e.center).sub(di)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pt = new D(),
  ta = new D(),
  ui = new D(),
  Xt = new D(),
  na = new D(),
  hi = new D(),
  ia = new D();
class fs {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Pt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Pt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Pt.copy(this.direction).multiplyScalar(t).add(this.origin),
        Pt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ta.copy(e).add(t).multiplyScalar(0.5),
      ui.copy(t).sub(e).normalize(),
      Xt.copy(this.origin).sub(ta);
    const a = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(ui),
      s = Xt.dot(this.direction),
      f = -Xt.dot(ui),
      c = Xt.lengthSq(),
      d = Math.abs(1 - o * o);
    let u, h, m, b;
    if (d > 0)
      if (((u = o * f - s), (h = o * s - f), (b = a * d), u >= 0))
        if (h >= -b)
          if (h <= b) {
            const p = 1 / d;
            (u *= p),
              (h *= p),
              (m = u * (u + o * h + 2 * s) + h * (o * u + h + 2 * f) + c);
          } else
            (h = a),
              (u = Math.max(0, -(o * h + s))),
              (m = -u * u + h * (h + 2 * f) + c);
        else
          (h = -a),
            (u = Math.max(0, -(o * h + s))),
            (m = -u * u + h * (h + 2 * f) + c);
      else
        h <= -b
          ? ((u = Math.max(0, -(-o * a + s))),
            (h = u > 0 ? -a : Math.min(Math.max(-a, -f), a)),
            (m = -u * u + h * (h + 2 * f) + c))
          : h <= b
          ? ((u = 0),
            (h = Math.min(Math.max(-a, -f), a)),
            (m = h * (h + 2 * f) + c))
          : ((u = Math.max(0, -(o * a + s))),
            (h = u > 0 ? a : Math.min(Math.max(-a, -f), a)),
            (m = -u * u + h * (h + 2 * f) + c));
    else
      (h = o > 0 ? -a : a),
        (u = Math.max(0, -(o * h + s))),
        (m = -u * u + h * (h + 2 * f) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
      i && i.copy(ui).multiplyScalar(h).add(ta),
      m
    );
  }
  intersectSphere(e, t) {
    Pt.subVectors(e.center, this.origin);
    const n = Pt.dot(this.direction),
      i = Pt.dot(Pt) - n * n,
      a = e.radius * e.radius;
    if (i > a) return null;
    const o = Math.sqrt(a - i),
      s = n - o,
      f = n + o;
    return s < 0 && f < 0 ? null : s < 0 ? this.at(f, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, a, o, s, f;
    const c = 1 / this.direction.x,
      d = 1 / this.direction.y,
      u = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - h.x) * c), (i = (e.max.x - h.x) * c))
        : ((n = (e.max.x - h.x) * c), (i = (e.min.x - h.x) * c)),
      d >= 0
        ? ((a = (e.min.y - h.y) * d), (o = (e.max.y - h.y) * d))
        : ((a = (e.max.y - h.y) * d), (o = (e.min.y - h.y) * d)),
      n > o ||
      a > i ||
      ((a > n || n !== n) && (n = a),
      (o < i || i !== i) && (i = o),
      u >= 0
        ? ((s = (e.min.z - h.z) * u), (f = (e.max.z - h.z) * u))
        : ((s = (e.max.z - h.z) * u), (f = (e.min.z - h.z) * u)),
      n > f || s > i) ||
      ((s > n || n !== n) && (n = s), (f < i || i !== i) && (i = f), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Pt) !== null;
  }
  intersectTriangle(e, t, n, i, a) {
    na.subVectors(t, e), hi.subVectors(n, e), ia.crossVectors(na, hi);
    let o = this.direction.dot(ia),
      s;
    if (o > 0) {
      if (i) return null;
      s = 1;
    } else if (o < 0) (s = -1), (o = -o);
    else return null;
    Xt.subVectors(this.origin, e);
    const f = s * this.direction.dot(hi.crossVectors(Xt, hi));
    if (f < 0) return null;
    const c = s * this.direction.dot(na.cross(Xt));
    if (c < 0 || f + c > o) return null;
    const d = -s * Xt.dot(ia);
    return d < 0 ? null : this.at(d / o, a);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qe {
  constructor() {
    (qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, a, o, s, f, c, d, u, h, m, b, p, l) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = n),
      (_[12] = i),
      (_[1] = a),
      (_[5] = o),
      (_[9] = s),
      (_[13] = f),
      (_[2] = c),
      (_[6] = d),
      (_[10] = u),
      (_[14] = h),
      (_[3] = m),
      (_[7] = b),
      (_[11] = p),
      (_[15] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / wn.setFromMatrixColumn(e, 0).length(),
      a = 1 / wn.setFromMatrixColumn(e, 1).length(),
      o = 1 / wn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * a),
      (t[5] = n[5] * a),
      (t[6] = n[6] * a),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      a = e.z,
      o = Math.cos(n),
      s = Math.sin(n),
      f = Math.cos(i),
      c = Math.sin(i),
      d = Math.cos(a),
      u = Math.sin(a);
    if (e.order === "XYZ") {
      const h = o * d,
        m = o * u,
        b = s * d,
        p = s * u;
      (t[0] = f * d),
        (t[4] = -f * u),
        (t[8] = c),
        (t[1] = m + b * c),
        (t[5] = h - p * c),
        (t[9] = -s * f),
        (t[2] = p - h * c),
        (t[6] = b + m * c),
        (t[10] = o * f);
    } else if (e.order === "YXZ") {
      const h = f * d,
        m = f * u,
        b = c * d,
        p = c * u;
      (t[0] = h + p * s),
        (t[4] = b * s - m),
        (t[8] = o * c),
        (t[1] = o * u),
        (t[5] = o * d),
        (t[9] = -s),
        (t[2] = m * s - b),
        (t[6] = p + h * s),
        (t[10] = o * f);
    } else if (e.order === "ZXY") {
      const h = f * d,
        m = f * u,
        b = c * d,
        p = c * u;
      (t[0] = h - p * s),
        (t[4] = -o * u),
        (t[8] = b + m * s),
        (t[1] = m + b * s),
        (t[5] = o * d),
        (t[9] = p - h * s),
        (t[2] = -o * c),
        (t[6] = s),
        (t[10] = o * f);
    } else if (e.order === "ZYX") {
      const h = o * d,
        m = o * u,
        b = s * d,
        p = s * u;
      (t[0] = f * d),
        (t[4] = b * c - m),
        (t[8] = h * c + p),
        (t[1] = f * u),
        (t[5] = p * c + h),
        (t[9] = m * c - b),
        (t[2] = -c),
        (t[6] = s * f),
        (t[10] = o * f);
    } else if (e.order === "YZX") {
      const h = o * f,
        m = o * c,
        b = s * f,
        p = s * c;
      (t[0] = f * d),
        (t[4] = p - h * u),
        (t[8] = b * u + m),
        (t[1] = u),
        (t[5] = o * d),
        (t[9] = -s * d),
        (t[2] = -c * d),
        (t[6] = m * u + b),
        (t[10] = h - p * u);
    } else if (e.order === "XZY") {
      const h = o * f,
        m = o * c,
        b = s * f,
        p = s * c;
      (t[0] = f * d),
        (t[4] = -u),
        (t[8] = c * d),
        (t[1] = h * u + p),
        (t[5] = o * d),
        (t[9] = m * u - b),
        (t[2] = b * u - m),
        (t[6] = s * d),
        (t[10] = p * u + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Fo, e, No);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      st.subVectors(e, t),
      st.lengthSq() === 0 && (st.z = 1),
      st.normalize(),
      Yt.crossVectors(n, st),
      Yt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (st.x += 1e-4) : (st.z += 1e-4),
        st.normalize(),
        Yt.crossVectors(n, st)),
      Yt.normalize(),
      pi.crossVectors(st, Yt),
      (i[0] = Yt.x),
      (i[4] = pi.x),
      (i[8] = st.x),
      (i[1] = Yt.y),
      (i[5] = pi.y),
      (i[9] = st.y),
      (i[2] = Yt.z),
      (i[6] = pi.z),
      (i[10] = st.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      a = this.elements,
      o = n[0],
      s = n[4],
      f = n[8],
      c = n[12],
      d = n[1],
      u = n[5],
      h = n[9],
      m = n[13],
      b = n[2],
      p = n[6],
      l = n[10],
      _ = n[14],
      M = n[3],
      T = n[7],
      w = n[11],
      y = n[15],
      A = i[0],
      N = i[4],
      x = i[8],
      E = i[12],
      F = i[1],
      X = i[5],
      re = i[9],
      O = i[13],
      I = i[2],
      q = i[6],
      Y = i[10],
      j = i[14],
      W = i[3],
      P = i[7],
      U = i[11],
      J = i[15];
    return (
      (a[0] = o * A + s * F + f * I + c * W),
      (a[4] = o * N + s * X + f * q + c * P),
      (a[8] = o * x + s * re + f * Y + c * U),
      (a[12] = o * E + s * O + f * j + c * J),
      (a[1] = d * A + u * F + h * I + m * W),
      (a[5] = d * N + u * X + h * q + m * P),
      (a[9] = d * x + u * re + h * Y + m * U),
      (a[13] = d * E + u * O + h * j + m * J),
      (a[2] = b * A + p * F + l * I + _ * W),
      (a[6] = b * N + p * X + l * q + _ * P),
      (a[10] = b * x + p * re + l * Y + _ * U),
      (a[14] = b * E + p * O + l * j + _ * J),
      (a[3] = M * A + T * F + w * I + y * W),
      (a[7] = M * N + T * X + w * q + y * P),
      (a[11] = M * x + T * re + w * Y + y * U),
      (a[15] = M * E + T * O + w * j + y * J),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      a = e[12],
      o = e[1],
      s = e[5],
      f = e[9],
      c = e[13],
      d = e[2],
      u = e[6],
      h = e[10],
      m = e[14],
      b = e[3],
      p = e[7],
      l = e[11],
      _ = e[15];
    return (
      b *
        (+a * f * u -
          i * c * u -
          a * s * h +
          n * c * h +
          i * s * m -
          n * f * m) +
      p *
        (+t * f * m -
          t * c * h +
          a * o * h -
          i * o * m +
          i * c * d -
          a * f * d) +
      l *
        (+t * c * u -
          t * s * m -
          a * o * u +
          n * o * m +
          a * s * d -
          n * c * d) +
      _ *
        (-i * s * d - t * f * u + t * s * h + i * o * u - n * o * h + n * f * d)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      a = e[3],
      o = e[4],
      s = e[5],
      f = e[6],
      c = e[7],
      d = e[8],
      u = e[9],
      h = e[10],
      m = e[11],
      b = e[12],
      p = e[13],
      l = e[14],
      _ = e[15],
      M = u * l * c - p * h * c + p * f * m - s * l * m - u * f * _ + s * h * _,
      T = b * h * c - d * l * c - b * f * m + o * l * m + d * f * _ - o * h * _,
      w = d * p * c - b * u * c + b * s * m - o * p * m - d * s * _ + o * u * _,
      y = b * u * f - d * p * f - b * s * h + o * p * h + d * s * l - o * u * l,
      A = t * M + n * T + i * w + a * y;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const N = 1 / A;
    return (
      (e[0] = M * N),
      (e[1] =
        (p * h * a -
          u * l * a -
          p * i * m +
          n * l * m +
          u * i * _ -
          n * h * _) *
        N),
      (e[2] =
        (s * l * a -
          p * f * a +
          p * i * c -
          n * l * c -
          s * i * _ +
          n * f * _) *
        N),
      (e[3] =
        (u * f * a -
          s * h * a -
          u * i * c +
          n * h * c +
          s * i * m -
          n * f * m) *
        N),
      (e[4] = T * N),
      (e[5] =
        (d * l * a -
          b * h * a +
          b * i * m -
          t * l * m -
          d * i * _ +
          t * h * _) *
        N),
      (e[6] =
        (b * f * a -
          o * l * a -
          b * i * c +
          t * l * c +
          o * i * _ -
          t * f * _) *
        N),
      (e[7] =
        (o * h * a -
          d * f * a +
          d * i * c -
          t * h * c -
          o * i * m +
          t * f * m) *
        N),
      (e[8] = w * N),
      (e[9] =
        (b * u * a -
          d * p * a -
          b * n * m +
          t * p * m +
          d * n * _ -
          t * u * _) *
        N),
      (e[10] =
        (o * p * a -
          b * s * a +
          b * n * c -
          t * p * c -
          o * n * _ +
          t * s * _) *
        N),
      (e[11] =
        (d * s * a -
          o * u * a -
          d * n * c +
          t * u * c +
          o * n * m -
          t * s * m) *
        N),
      (e[12] = y * N),
      (e[13] =
        (d * p * i -
          b * u * i +
          b * n * h -
          t * p * h -
          d * n * l +
          t * u * l) *
        N),
      (e[14] =
        (b * s * i -
          o * p * i -
          b * n * f +
          t * p * f +
          o * n * l -
          t * s * l) *
        N),
      (e[15] =
        (o * u * i -
          d * s * i +
          d * n * f -
          t * u * f -
          o * n * h +
          t * s * h) *
        N),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      a = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= a),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= a),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= a),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= a),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      a = 1 - n,
      o = e.x,
      s = e.y,
      f = e.z,
      c = a * o,
      d = a * s;
    return (
      this.set(
        c * o + n,
        c * s - i * f,
        c * f + i * s,
        0,
        c * s + i * f,
        d * s + n,
        d * f - i * o,
        0,
        c * f - i * s,
        d * f + i * o,
        a * f * f + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, a, o) {
    return this.set(1, n, a, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      a = t._x,
      o = t._y,
      s = t._z,
      f = t._w,
      c = a + a,
      d = o + o,
      u = s + s,
      h = a * c,
      m = a * d,
      b = a * u,
      p = o * d,
      l = o * u,
      _ = s * u,
      M = f * c,
      T = f * d,
      w = f * u,
      y = n.x,
      A = n.y,
      N = n.z;
    return (
      (i[0] = (1 - (p + _)) * y),
      (i[1] = (m + w) * y),
      (i[2] = (b - T) * y),
      (i[3] = 0),
      (i[4] = (m - w) * A),
      (i[5] = (1 - (h + _)) * A),
      (i[6] = (l + M) * A),
      (i[7] = 0),
      (i[8] = (b + T) * N),
      (i[9] = (l - M) * N),
      (i[10] = (1 - (h + p)) * N),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let a = wn.set(i[0], i[1], i[2]).length();
    const o = wn.set(i[4], i[5], i[6]).length(),
      s = wn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (a = -a),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      _t.copy(this);
    const c = 1 / a,
      d = 1 / o,
      u = 1 / s;
    return (
      (_t.elements[0] *= c),
      (_t.elements[1] *= c),
      (_t.elements[2] *= c),
      (_t.elements[4] *= d),
      (_t.elements[5] *= d),
      (_t.elements[6] *= d),
      (_t.elements[8] *= u),
      (_t.elements[9] *= u),
      (_t.elements[10] *= u),
      t.setFromRotationMatrix(_t),
      (n.x = a),
      (n.y = o),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, i, a, o) {
    const s = this.elements,
      f = (2 * a) / (t - e),
      c = (2 * a) / (n - i),
      d = (t + e) / (t - e),
      u = (n + i) / (n - i),
      h = -(o + a) / (o - a),
      m = (-2 * o * a) / (o - a);
    return (
      (s[0] = f),
      (s[4] = 0),
      (s[8] = d),
      (s[12] = 0),
      (s[1] = 0),
      (s[5] = c),
      (s[9] = u),
      (s[13] = 0),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = h),
      (s[14] = m),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = -1),
      (s[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, a, o) {
    const s = this.elements,
      f = 1 / (t - e),
      c = 1 / (n - i),
      d = 1 / (o - a),
      u = (t + e) * f,
      h = (n + i) * c,
      m = (o + a) * d;
    return (
      (s[0] = 2 * f),
      (s[4] = 0),
      (s[8] = 0),
      (s[12] = -u),
      (s[1] = 0),
      (s[5] = 2 * c),
      (s[9] = 0),
      (s[13] = -h),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = -2 * d),
      (s[14] = -m),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = 0),
      (s[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const wn = new D(),
  _t = new qe(),
  Fo = new D(0, 0, 0),
  No = new D(1, 1, 1),
  Yt = new D(),
  pi = new D(),
  st = new D(),
  mr = new qe(),
  gr = new ei();
class ni {
  constructor(e = 0, t = 0, n = 0, i = ni.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      a = i[0],
      o = i[4],
      s = i[8],
      f = i[1],
      c = i[5],
      d = i[9],
      u = i[2],
      h = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(ct(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-d, m)), (this._z = Math.atan2(-o, a)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-ct(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(s, m)), (this._z = Math.atan2(f, c)))
            : ((this._y = Math.atan2(-u, a)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(ct(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-u, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(f, a)));
        break;
      case "ZYX":
        (this._y = Math.asin(-ct(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(h, m)), (this._z = Math.atan2(f, a)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(ct(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(-d, c)), (this._y = Math.atan2(-u, a)))
            : ((this._x = 0), (this._y = Math.atan2(s, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-ct(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(s, a)))
            : ((this._x = Math.atan2(-d, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      mr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(mr, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return gr.setFromEuler(this), this.setFromQuaternion(gr, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
ni.DefaultOrder = "XYZ";
ni.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ls {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Uo = 0;
const br = new D(),
  Tn = new ei(),
  It = new qe(),
  mi = new D(),
  Yn = new D(),
  zo = new D(),
  Oo = new ei(),
  _r = new D(1, 0, 0),
  xr = new D(0, 1, 0),
  vr = new D(0, 0, 1),
  Bo = { type: "added" },
  Mr = { type: "removed" };
class nt extends Wn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Uo++ }),
      (this.uuid = Qn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = nt.DefaultUp.clone());
    const e = new D(),
      t = new ni(),
      n = new ei(),
      i = new D(1, 1, 1);
    function a() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(a),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new qe() },
        normalMatrix: { value: new pt() },
      }),
      (this.matrix = new qe()),
      (this.matrixWorld = new qe()),
      (this.matrixAutoUpdate = nt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = nt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new ls()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.multiply(Tn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.premultiply(Tn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_r, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(xr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(vr, e);
  }
  translateOnAxis(e, t) {
    return (
      br.copy(e).applyQuaternion(this.quaternion),
      this.position.add(br.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(_r, e);
  }
  translateY(e) {
    return this.translateOnAxis(xr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(vr, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(It.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? mi.copy(e) : mi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Yn.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? It.lookAt(Yn, mi, this.up)
        : It.lookAt(mi, Yn, this.up),
      this.quaternion.setFromRotationMatrix(It),
      i &&
        (It.extractRotation(i.matrixWorld),
        Tn.setFromRotationMatrix(It),
        this.quaternion.premultiply(Tn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Bo))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Mr)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Mr);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      It.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), It.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(It),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, e, zo), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, Oo, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const a = t[n];
      (a.matrixWorldAutoUpdate === !0 || e === !0) && a.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let a = 0, o = i.length; a < o; a++) {
        const s = i[a];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function a(s, f) {
      return s[f.uuid] === void 0 && (s[f.uuid] = f.toJSON(e)), f.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = a(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const f = s.shapes;
        if (Array.isArray(f))
          for (let c = 0, d = f.length; c < d; c++) {
            const u = f[c];
            a(e.shapes, u);
          }
        else a(e.shapes, f);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (a(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const s = [];
        for (let f = 0, c = this.material.length; f < c; f++)
          s.push(a(e.materials, this.material[f]));
        i.material = s;
      } else i.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const f = this.animations[s];
        i.animations.push(a(e.animations, f));
      }
    }
    if (t) {
      const s = o(e.geometries),
        f = o(e.materials),
        c = o(e.textures),
        d = o(e.images),
        u = o(e.shapes),
        h = o(e.skeletons),
        m = o(e.animations),
        b = o(e.nodes);
      s.length > 0 && (n.geometries = s),
        f.length > 0 && (n.materials = f),
        c.length > 0 && (n.textures = c),
        d.length > 0 && (n.images = d),
        u.length > 0 && (n.shapes = u),
        h.length > 0 && (n.skeletons = h),
        m.length > 0 && (n.animations = m),
        b.length > 0 && (n.nodes = b);
    }
    return (n.object = i), n;
    function o(s) {
      const f = [];
      for (const c in s) {
        const d = s[c];
        delete d.metadata, f.push(d);
      }
      return f;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
nt.DefaultUp = new D(0, 1, 0);
nt.DefaultMatrixAutoUpdate = !0;
nt.DefaultMatrixWorldAutoUpdate = !0;
const xt = new D(),
  Ft = new D(),
  aa = new D(),
  Nt = new D(),
  En = new D(),
  An = new D(),
  Sr = new D(),
  ra = new D(),
  sa = new D(),
  oa = new D();
class zt {
  constructor(e = new D(), t = new D(), n = new D()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), xt.subVectors(e, t), i.cross(xt);
    const a = i.lengthSq();
    return a > 0 ? i.multiplyScalar(1 / Math.sqrt(a)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, a) {
    xt.subVectors(i, t), Ft.subVectors(n, t), aa.subVectors(e, t);
    const o = xt.dot(xt),
      s = xt.dot(Ft),
      f = xt.dot(aa),
      c = Ft.dot(Ft),
      d = Ft.dot(aa),
      u = o * c - s * s;
    if (u === 0) return a.set(-2, -1, -1);
    const h = 1 / u,
      m = (c * f - s * d) * h,
      b = (o * d - s * f) * h;
    return a.set(1 - m - b, b, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Nt),
      Nt.x >= 0 && Nt.y >= 0 && Nt.x + Nt.y <= 1
    );
  }
  static getUV(e, t, n, i, a, o, s, f) {
    return (
      this.getBarycoord(e, t, n, i, Nt),
      f.set(0, 0),
      f.addScaledVector(a, Nt.x),
      f.addScaledVector(o, Nt.y),
      f.addScaledVector(s, Nt.z),
      f
    );
  }
  static isFrontFacing(e, t, n, i) {
    return xt.subVectors(n, t), Ft.subVectors(e, t), xt.cross(Ft).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      xt.subVectors(this.c, this.b),
      Ft.subVectors(this.a, this.b),
      xt.cross(Ft).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return zt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return zt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, a) {
    return zt.getUV(e, this.a, this.b, this.c, t, n, i, a);
  }
  containsPoint(e) {
    return zt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return zt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      a = this.c;
    let o, s;
    En.subVectors(i, n), An.subVectors(a, n), ra.subVectors(e, n);
    const f = En.dot(ra),
      c = An.dot(ra);
    if (f <= 0 && c <= 0) return t.copy(n);
    sa.subVectors(e, i);
    const d = En.dot(sa),
      u = An.dot(sa);
    if (d >= 0 && u <= d) return t.copy(i);
    const h = f * u - d * c;
    if (h <= 0 && f >= 0 && d <= 0)
      return (o = f / (f - d)), t.copy(n).addScaledVector(En, o);
    oa.subVectors(e, a);
    const m = En.dot(oa),
      b = An.dot(oa);
    if (b >= 0 && m <= b) return t.copy(a);
    const p = m * c - f * b;
    if (p <= 0 && c >= 0 && b <= 0)
      return (s = c / (c - b)), t.copy(n).addScaledVector(An, s);
    const l = d * b - m * u;
    if (l <= 0 && u - d >= 0 && m - b >= 0)
      return (
        Sr.subVectors(a, i),
        (s = (u - d) / (u - d + (m - b))),
        t.copy(i).addScaledVector(Sr, s)
      );
    const _ = 1 / (l + p + h);
    return (
      (o = p * _),
      (s = h * _),
      t.copy(n).addScaledVector(En, o).addScaledVector(An, s)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Go = 0;
class ii extends Wn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Go++ }),
      (this.uuid = Qn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Un),
      (this.side = On),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Qr),
      (this.blendDst = es),
      (this.blendEquation = Fn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Ma),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Lo),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = qi),
      (this.stencilZFail = qi),
      (this.stencilZPass = qi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(
          e
        ).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Un && (n.blending = this.blending),
      this.side !== On && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(a) {
      const o = [];
      for (const s in a) {
        const f = a[s];
        delete f.metadata, o.push(f);
      }
      return o;
    }
    if (t) {
      const a = i(e.textures),
        o = i(e.images);
      a.length > 0 && (n.textures = a), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let a = 0; a !== i; ++a) n[a] = t[a].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ds extends ii {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = ts),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ve = new D(),
  gi = new Fe();
class Ct {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = fr),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, a = this.itemSize; i < a; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        gi.fromBufferAttribute(this, t),
          gi.applyMatrix3(e),
          this.setXY(t, gi.x, gi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ve.fromBufferAttribute(this, t),
          Ve.applyMatrix3(e),
          this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t),
        Ve.applyMatrix4(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t),
        Ve.applyNormalMatrix(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t),
        Ve.transformDirection(e),
        this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = si(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = rt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = si(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = rt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = si(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = rt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = si(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = rt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = rt(t, this.array)), (n = rt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = rt(t, this.array)),
        (n = rt(n, this.array)),
        (i = rt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = rt(t, this.array)),
        (n = rt(n, this.array)),
        (i = rt(i, this.array)),
        (a = rt(a, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = a),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== fr && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class us extends Ct {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class hs extends Ct {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Mt extends Ct {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Vo = 0;
const dt = new qe(),
  ca = new nt(),
  Cn = new D(),
  ot = new ti(),
  jn = new ti(),
  He = new D();
class Vt extends Wn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Vo++ }),
      (this.uuid = Qn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (as(e) ? hs : us)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const a = new pt().getNormalMatrix(e);
      n.applyNormalMatrix(a), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return dt.makeRotationFromQuaternion(e), this.applyMatrix4(dt), this;
  }
  rotateX(e) {
    return dt.makeRotationX(e), this.applyMatrix4(dt), this;
  }
  rotateY(e) {
    return dt.makeRotationY(e), this.applyMatrix4(dt), this;
  }
  rotateZ(e) {
    return dt.makeRotationZ(e), this.applyMatrix4(dt), this;
  }
  translate(e, t, n) {
    return dt.makeTranslation(e, t, n), this.applyMatrix4(dt), this;
  }
  scale(e, t, n) {
    return dt.makeScale(e, t, n), this.applyMatrix4(dt), this;
  }
  lookAt(e) {
    return ca.lookAt(e), ca.updateMatrix(), this.applyMatrix4(ca.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Cn).negate(),
      this.translate(Cn.x, Cn.y, Cn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const a = e[n];
      t.push(a.x, a.y, a.z || 0);
    }
    return this.setAttribute("position", new Mt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ti());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new D(-1 / 0, -1 / 0, -1 / 0),
          new D(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const a = t[n];
          ot.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (He.addVectors(this.boundingBox.min, ot.min),
                this.boundingBox.expandByPoint(He),
                He.addVectors(this.boundingBox.max, ot.max),
                this.boundingBox.expandByPoint(He))
              : (this.boundingBox.expandByPoint(ot.min),
                this.boundingBox.expandByPoint(ot.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((ot.setFromBufferAttribute(e), t))
        for (let a = 0, o = t.length; a < o; a++) {
          const s = t[a];
          jn.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (He.addVectors(ot.min, jn.min),
                ot.expandByPoint(He),
                He.addVectors(ot.max, jn.max),
                ot.expandByPoint(He))
              : (ot.expandByPoint(jn.min), ot.expandByPoint(jn.max));
        }
      ot.getCenter(n);
      let i = 0;
      for (let a = 0, o = e.count; a < o; a++)
        He.fromBufferAttribute(e, a),
          (i = Math.max(i, n.distanceToSquared(He)));
      if (t)
        for (let a = 0, o = t.length; a < o; a++) {
          const s = t[a],
            f = this.morphTargetsRelative;
          for (let c = 0, d = s.count; c < d; c++)
            He.fromBufferAttribute(s, c),
              f && (Cn.fromBufferAttribute(e, c), He.add(Cn)),
              (i = Math.max(i, n.distanceToSquared(He)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      a = t.normal.array,
      o = t.uv.array,
      s = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Ct(new Float32Array(4 * s), 4));
    const f = this.getAttribute("tangent").array,
      c = [],
      d = [];
    for (let F = 0; F < s; F++) (c[F] = new D()), (d[F] = new D());
    const u = new D(),
      h = new D(),
      m = new D(),
      b = new Fe(),
      p = new Fe(),
      l = new Fe(),
      _ = new D(),
      M = new D();
    function T(F, X, re) {
      u.fromArray(i, F * 3),
        h.fromArray(i, X * 3),
        m.fromArray(i, re * 3),
        b.fromArray(o, F * 2),
        p.fromArray(o, X * 2),
        l.fromArray(o, re * 2),
        h.sub(u),
        m.sub(u),
        p.sub(b),
        l.sub(b);
      const O = 1 / (p.x * l.y - l.x * p.y);
      !isFinite(O) ||
        (_.copy(h)
          .multiplyScalar(l.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(O),
        M.copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(h, -l.x)
          .multiplyScalar(O),
        c[F].add(_),
        c[X].add(_),
        c[re].add(_),
        d[F].add(M),
        d[X].add(M),
        d[re].add(M));
    }
    let w = this.groups;
    w.length === 0 && (w = [{ start: 0, count: n.length }]);
    for (let F = 0, X = w.length; F < X; ++F) {
      const re = w[F],
        O = re.start,
        I = re.count;
      for (let q = O, Y = O + I; q < Y; q += 3) T(n[q + 0], n[q + 1], n[q + 2]);
    }
    const y = new D(),
      A = new D(),
      N = new D(),
      x = new D();
    function E(F) {
      N.fromArray(a, F * 3), x.copy(N);
      const X = c[F];
      y.copy(X),
        y.sub(N.multiplyScalar(N.dot(X))).normalize(),
        A.crossVectors(x, X);
      const O = A.dot(d[F]) < 0 ? -1 : 1;
      (f[F * 4] = y.x),
        (f[F * 4 + 1] = y.y),
        (f[F * 4 + 2] = y.z),
        (f[F * 4 + 3] = O);
    }
    for (let F = 0, X = w.length; F < X; ++F) {
      const re = w[F],
        O = re.start,
        I = re.count;
      for (let q = O, Y = O + I; q < Y; q += 3)
        E(n[q + 0]), E(n[q + 1]), E(n[q + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Ct(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let h = 0, m = n.count; h < m; h++) n.setXYZ(h, 0, 0, 0);
      const i = new D(),
        a = new D(),
        o = new D(),
        s = new D(),
        f = new D(),
        c = new D(),
        d = new D(),
        u = new D();
      if (e)
        for (let h = 0, m = e.count; h < m; h += 3) {
          const b = e.getX(h + 0),
            p = e.getX(h + 1),
            l = e.getX(h + 2);
          i.fromBufferAttribute(t, b),
            a.fromBufferAttribute(t, p),
            o.fromBufferAttribute(t, l),
            d.subVectors(o, a),
            u.subVectors(i, a),
            d.cross(u),
            s.fromBufferAttribute(n, b),
            f.fromBufferAttribute(n, p),
            c.fromBufferAttribute(n, l),
            s.add(d),
            f.add(d),
            c.add(d),
            n.setXYZ(b, s.x, s.y, s.z),
            n.setXYZ(p, f.x, f.y, f.z),
            n.setXYZ(l, c.x, c.y, c.z);
        }
      else
        for (let h = 0, m = t.count; h < m; h += 3)
          i.fromBufferAttribute(t, h + 0),
            a.fromBufferAttribute(t, h + 1),
            o.fromBufferAttribute(t, h + 2),
            d.subVectors(o, a),
            u.subVectors(i, a),
            d.cross(u),
            n.setXYZ(h + 0, d.x, d.y, d.z),
            n.setXYZ(h + 1, d.x, d.y, d.z),
            n.setXYZ(h + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      He.fromBufferAttribute(e, t),
        He.normalize(),
        e.setXYZ(t, He.x, He.y, He.z);
  }
  toNonIndexed() {
    function e(s, f) {
      const c = s.array,
        d = s.itemSize,
        u = s.normalized,
        h = new c.constructor(f.length * d);
      let m = 0,
        b = 0;
      for (let p = 0, l = f.length; p < l; p++) {
        s.isInterleavedBufferAttribute
          ? (m = f[p] * s.data.stride + s.offset)
          : (m = f[p] * d);
        for (let _ = 0; _ < d; _++) h[b++] = c[m++];
      }
      return new Ct(h, d, u);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Vt(),
      n = this.index.array,
      i = this.attributes;
    for (const s in i) {
      const f = i[s],
        c = e(f, n);
      t.setAttribute(s, c);
    }
    const a = this.morphAttributes;
    for (const s in a) {
      const f = [],
        c = a[s];
      for (let d = 0, u = c.length; d < u; d++) {
        const h = c[d],
          m = e(h, n);
        f.push(m);
      }
      t.morphAttributes[s] = f;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let s = 0, f = o.length; s < f; s++) {
      const c = o[s];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const f = this.parameters;
      for (const c in f) f[c] !== void 0 && (e[c] = f[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const f in n) {
      const c = n[f];
      e.data.attributes[f] = c.toJSON(e.data);
    }
    const i = {};
    let a = !1;
    for (const f in this.morphAttributes) {
      const c = this.morphAttributes[f],
        d = [];
      for (let u = 0, h = c.length; u < h; u++) {
        const m = c[u];
        d.push(m.toJSON(e.data));
      }
      d.length > 0 && ((i[f] = d), (a = !0));
    }
    a &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const s = this.boundingSphere;
    return (
      s !== null &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const d = i[c];
      this.setAttribute(c, d.clone(t));
    }
    const a = e.morphAttributes;
    for (const c in a) {
      const d = [],
        u = a[c];
      for (let h = 0, m = u.length; h < m; h++) d.push(u[h].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, d = o.length; c < d; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const f = e.boundingSphere;
    return (
      f !== null && (this.boundingSphere = f.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const yr = new qe(),
  Ln = new fs(),
  fa = new Fi(),
  jt = new D(),
  Zt = new D(),
  $t = new D(),
  la = new D(),
  da = new D(),
  ua = new D(),
  bi = new D(),
  _i = new D(),
  xi = new D(),
  vi = new Fe(),
  Mi = new Fe(),
  Si = new Fe(),
  ha = new D(),
  yi = new D();
class Bt extends nt {
  constructor(e = new Vt(), t = new ds()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, o = i.length; a < o; a++) {
          const s = i[a].name || String(a);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = a);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      a = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      fa.copy(n.boundingSphere),
      fa.applyMatrix4(a),
      e.ray.intersectsSphere(fa) === !1) ||
      (yr.copy(a).invert(),
      Ln.copy(e.ray).applyMatrix4(yr),
      n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const s = n.index,
      f = n.attributes.position,
      c = n.morphAttributes.position,
      d = n.morphTargetsRelative,
      u = n.attributes.uv,
      h = n.attributes.uv2,
      m = n.groups,
      b = n.drawRange;
    if (s !== null)
      if (Array.isArray(i))
        for (let p = 0, l = m.length; p < l; p++) {
          const _ = m[p],
            M = i[_.materialIndex],
            T = Math.max(_.start, b.start),
            w = Math.min(
              s.count,
              Math.min(_.start + _.count, b.start + b.count)
            );
          for (let y = T, A = w; y < A; y += 3) {
            const N = s.getX(y),
              x = s.getX(y + 1),
              E = s.getX(y + 2);
            (o = wi(this, M, e, Ln, f, c, d, u, h, N, x, E)),
              o &&
                ((o.faceIndex = Math.floor(y / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, b.start),
          l = Math.min(s.count, b.start + b.count);
        for (let _ = p, M = l; _ < M; _ += 3) {
          const T = s.getX(_),
            w = s.getX(_ + 1),
            y = s.getX(_ + 2);
          (o = wi(this, i, e, Ln, f, c, d, u, h, T, w, y)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
    else if (f !== void 0)
      if (Array.isArray(i))
        for (let p = 0, l = m.length; p < l; p++) {
          const _ = m[p],
            M = i[_.materialIndex],
            T = Math.max(_.start, b.start),
            w = Math.min(
              f.count,
              Math.min(_.start + _.count, b.start + b.count)
            );
          for (let y = T, A = w; y < A; y += 3) {
            const N = y,
              x = y + 1,
              E = y + 2;
            (o = wi(this, M, e, Ln, f, c, d, u, h, N, x, E)),
              o &&
                ((o.faceIndex = Math.floor(y / 3)),
                (o.face.materialIndex = _.materialIndex),
                t.push(o));
          }
        }
      else {
        const p = Math.max(0, b.start),
          l = Math.min(f.count, b.start + b.count);
        for (let _ = p, M = l; _ < M; _ += 3) {
          const T = _,
            w = _ + 1,
            y = _ + 2;
          (o = wi(this, i, e, Ln, f, c, d, u, h, T, w, y)),
            o && ((o.faceIndex = Math.floor(_ / 3)), t.push(o));
        }
      }
  }
}
function ko(r, e, t, n, i, a, o, s) {
  let f;
  if (
    (e.side === mt
      ? (f = n.intersectTriangle(o, a, i, !0, s))
      : (f = n.intersectTriangle(i, a, o, e.side !== Ot, s)),
    f === null)
  )
    return null;
  yi.copy(s), yi.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(yi);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: yi.clone(), object: r };
}
function wi(r, e, t, n, i, a, o, s, f, c, d, u) {
  jt.fromBufferAttribute(i, c),
    Zt.fromBufferAttribute(i, d),
    $t.fromBufferAttribute(i, u);
  const h = r.morphTargetInfluences;
  if (a && h) {
    bi.set(0, 0, 0), _i.set(0, 0, 0), xi.set(0, 0, 0);
    for (let b = 0, p = a.length; b < p; b++) {
      const l = h[b],
        _ = a[b];
      l !== 0 &&
        (la.fromBufferAttribute(_, c),
        da.fromBufferAttribute(_, d),
        ua.fromBufferAttribute(_, u),
        o
          ? (bi.addScaledVector(la, l),
            _i.addScaledVector(da, l),
            xi.addScaledVector(ua, l))
          : (bi.addScaledVector(la.sub(jt), l),
            _i.addScaledVector(da.sub(Zt), l),
            xi.addScaledVector(ua.sub($t), l)));
    }
    jt.add(bi), Zt.add(_i), $t.add(xi);
  }
  r.isSkinnedMesh &&
    (r.boneTransform(c, jt), r.boneTransform(d, Zt), r.boneTransform(u, $t));
  const m = ko(r, e, t, n, jt, Zt, $t, ha);
  if (m) {
    s &&
      (vi.fromBufferAttribute(s, c),
      Mi.fromBufferAttribute(s, d),
      Si.fromBufferAttribute(s, u),
      (m.uv = zt.getUV(ha, jt, Zt, $t, vi, Mi, Si, new Fe()))),
      f &&
        (vi.fromBufferAttribute(f, c),
        Mi.fromBufferAttribute(f, d),
        Si.fromBufferAttribute(f, u),
        (m.uv2 = zt.getUV(ha, jt, Zt, $t, vi, Mi, Si, new Fe())));
    const b = { a: c, b: d, c: u, normal: new D(), materialIndex: 0 };
    zt.getNormal(jt, Zt, $t, b.normal), (m.face = b);
  }
  return m;
}
class ai extends Vt {
  constructor(e = 1, t = 1, n = 1, i = 1, a = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: a,
        depthSegments: o,
      });
    const s = this;
    (i = Math.floor(i)), (a = Math.floor(a)), (o = Math.floor(o));
    const f = [],
      c = [],
      d = [],
      u = [];
    let h = 0,
      m = 0;
    b("z", "y", "x", -1, -1, n, t, e, o, a, 0),
      b("z", "y", "x", 1, -1, n, t, -e, o, a, 1),
      b("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      b("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      b("x", "y", "z", 1, -1, e, t, n, i, a, 4),
      b("x", "y", "z", -1, -1, e, t, -n, i, a, 5),
      this.setIndex(f),
      this.setAttribute("position", new Mt(c, 3)),
      this.setAttribute("normal", new Mt(d, 3)),
      this.setAttribute("uv", new Mt(u, 2));
    function b(p, l, _, M, T, w, y, A, N, x, E) {
      const F = w / N,
        X = y / x,
        re = w / 2,
        O = y / 2,
        I = A / 2,
        q = N + 1,
        Y = x + 1;
      let j = 0,
        W = 0;
      const P = new D();
      for (let U = 0; U < Y; U++) {
        const J = U * X - O;
        for (let $ = 0; $ < q; $++) {
          const Z = $ * F - re;
          (P[p] = Z * M),
            (P[l] = J * T),
            (P[_] = I),
            c.push(P.x, P.y, P.z),
            (P[p] = 0),
            (P[l] = 0),
            (P[_] = A > 0 ? 1 : -1),
            d.push(P.x, P.y, P.z),
            u.push($ / N),
            u.push(1 - U / x),
            (j += 1);
        }
      }
      for (let U = 0; U < x; U++)
        for (let J = 0; J < N; J++) {
          const $ = h + J + q * U,
            Z = h + J + q * (U + 1),
            fe = h + (J + 1) + q * (U + 1),
            ge = h + (J + 1) + q * U;
          f.push($, Z, ge), f.push(Z, fe, ge), (W += 6);
        }
      s.addGroup(m, W, E), (m += W), (h += j);
    }
  }
  static fromJSON(e) {
    return new ai(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function kn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function $e(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = kn(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Wo(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
const Ho = { clone: kn, merge: $e };
var qo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Xo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Jt extends ii {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = qo),
      (this.fragmentShader = Xo),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = kn(e.uniforms)),
      (this.uniformsGroups = Wo(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ps extends nt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new qe()),
      (this.projectionMatrix = new qe()),
      (this.projectionMatrixInverse = new qe());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ht extends ps {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = dr * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Xi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return dr * 2 * Math.atan(Math.tan(Xi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, a, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Xi * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      a = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const f = o.fullWidth,
        c = o.fullHeight;
      (a += (o.offsetX * i) / f),
        (t -= (o.offsetY * n) / c),
        (i *= o.width / f),
        (n *= o.height / c);
    }
    const s = this.filmOffset;
    s !== 0 && (a += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(a, a + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Dn = 90,
  Rn = 1;
class Yo extends nt {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new ht(Dn, Rn, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new D(1, 0, 0)),
      this.add(i);
    const a = new ht(Dn, Rn, e, t);
    (a.layers = this.layers),
      a.up.set(0, -1, 0),
      a.lookAt(new D(-1, 0, 0)),
      this.add(a);
    const o = new ht(Dn, Rn, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new D(0, 1, 0)),
      this.add(o);
    const s = new ht(Dn, Rn, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, -1),
      s.lookAt(new D(0, -1, 0)),
      this.add(s);
    const f = new ht(Dn, Rn, e, t);
    (f.layers = this.layers),
      f.up.set(0, -1, 0),
      f.lookAt(new D(0, 0, 1)),
      this.add(f);
    const c = new ht(Dn, Rn, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new D(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, a, o, s, f, c] = this.children,
      d = e.getRenderTarget(),
      u = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = Gt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, a),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, s),
      e.setRenderTarget(n, 4),
      e.render(t, f),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(d),
      (e.toneMapping = u),
      (e.xr.enabled = h),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ms extends St {
  constructor(e, t, n, i, a, o, s, f, c, d) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Bn),
      super(e, t, n, i, a, o, s, f, c, d),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class jo extends gn {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new ms(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ut);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new ai(5, 5, 5),
      a = new Jt({
        name: "CubemapFromEquirect",
        uniforms: kn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: mt,
        blending: Kt,
      });
    a.uniforms.tEquirect.value = t;
    const o = new Bt(i, a),
      s = t.minFilter;
    return (
      t.minFilter === Ii && (t.minFilter = ut),
      new Yo(1, 10, this).update(e, o),
      (t.minFilter = s),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const a = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(a);
  }
}
const pa = new D(),
  Zo = new D(),
  $o = new pt();
class sn {
  constructor(e = new D(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = pa.subVectors(n, t).cross(Zo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(pa),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / i;
    return a < 0 || a > 1 ? null : t.copy(n).multiplyScalar(a).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || $o.getNormalMatrix(e),
      i = this.coplanarPoint(pa).applyMatrix4(e),
      a = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(a)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = new Fi(),
  Ti = new D();
class gs {
  constructor(
    e = new sn(),
    t = new sn(),
    n = new sn(),
    i = new sn(),
    a = new sn(),
    o = new sn()
  ) {
    this.planes = [e, t, n, i, a, o];
  }
  set(e, t, n, i, a, o) {
    const s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(a),
      s[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      a = n[1],
      o = n[2],
      s = n[3],
      f = n[4],
      c = n[5],
      d = n[6],
      u = n[7],
      h = n[8],
      m = n[9],
      b = n[10],
      p = n[11],
      l = n[12],
      _ = n[13],
      M = n[14],
      T = n[15];
    return (
      t[0].setComponents(s - i, u - f, p - h, T - l).normalize(),
      t[1].setComponents(s + i, u + f, p + h, T + l).normalize(),
      t[2].setComponents(s + a, u + c, p + m, T + _).normalize(),
      t[3].setComponents(s - a, u - c, p - m, T - _).normalize(),
      t[4].setComponents(s - o, u - d, p - b, T - M).normalize(),
      t[5].setComponents(s + o, u + d, p + b, T + M).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Pn)
    );
  }
  intersectsSprite(e) {
    return (
      Pn.center.set(0, 0, 0),
      (Pn.radius = 0.7071067811865476),
      Pn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Pn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let a = 0; a < 6; a++) if (t[a].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ti.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ti.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ti.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ti) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function bs() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(a, o) {
    t(a, o), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (a) {
      t = a;
    },
    setContext: function (a) {
      r = a;
    },
  };
}
function Ko(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, d) {
    const u = c.array,
      h = c.usage,
      m = r.createBuffer();
    r.bindBuffer(d, m), r.bufferData(d, u, h), c.onUploadCallback();
    let b;
    if (u instanceof Float32Array) b = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) b = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else b = 5123;
    else if (u instanceof Int16Array) b = 5122;
    else if (u instanceof Uint32Array) b = 5125;
    else if (u instanceof Int32Array) b = 5124;
    else if (u instanceof Int8Array) b = 5120;
    else if (u instanceof Uint8Array) b = 5121;
    else if (u instanceof Uint8ClampedArray) b = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + u
      );
    return {
      buffer: m,
      type: b,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function a(c, d, u) {
    const h = d.array,
      m = d.updateRange;
    r.bindBuffer(u, c),
      m.count === -1
        ? r.bufferSubData(u, 0, h)
        : (t
            ? r.bufferSubData(
                u,
                m.offset * h.BYTES_PER_ELEMENT,
                h,
                m.offset,
                m.count
              )
            : r.bufferSubData(
                u,
                m.offset * h.BYTES_PER_ELEMENT,
                h.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function s(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d && (r.deleteBuffer(d.buffer), n.delete(c));
  }
  function f(c, d) {
    if (c.isGLBufferAttribute) {
      const h = n.get(c);
      (!h || h.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0
      ? n.set(c, i(c, d))
      : u.version < c.version && (a(u.buffer, c, d), (u.version = c.version));
  }
  return { get: o, remove: s, update: f };
}
class Ni extends Vt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const a = e / 2,
      o = t / 2,
      s = Math.floor(n),
      f = Math.floor(i),
      c = s + 1,
      d = f + 1,
      u = e / s,
      h = t / f,
      m = [],
      b = [],
      p = [],
      l = [];
    for (let _ = 0; _ < d; _++) {
      const M = _ * h - o;
      for (let T = 0; T < c; T++) {
        const w = T * u - a;
        b.push(w, -M, 0), p.push(0, 0, 1), l.push(T / s), l.push(1 - _ / f);
      }
    }
    for (let _ = 0; _ < f; _++)
      for (let M = 0; M < s; M++) {
        const T = M + c * _,
          w = M + c * (_ + 1),
          y = M + 1 + c * (_ + 1),
          A = M + 1 + c * _;
        m.push(T, w, A), m.push(w, y, A);
      }
    this.setIndex(m),
      this.setAttribute("position", new Mt(b, 3)),
      this.setAttribute("normal", new Mt(p, 3)),
      this.setAttribute("uv", new Mt(l, 2));
  }
  static fromJSON(e) {
    return new Ni(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Jo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  Qo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ec = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  tc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  nc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  ic = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  ac = "vec3 transformed = vec3( position );",
  rc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  sc = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  oc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
        return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
    }
float IorToFresnel0( float transmittedIor, float incidentIor ) {
    return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
    float phase = 2.0 * PI * OPD * 1.0e-9;
    vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
    vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
    vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
    vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
    xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
    xyz /= 1.0685e-7;
    vec3 rgb = XYZ_TO_REC709 * xyz;
    return rgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
    vec3 I;
    float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
    float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
    float cosTheta2Sq = 1.0 - sinTheta2Sq;
    if ( cosTheta2Sq < 0.0 ) {
        return vec3( 1.0 );
    }
    float cosTheta2 = sqrt( cosTheta2Sq );
    float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
    float R12 = F_Schlick( R0, 1.0, cosTheta1 );
    float R21 = R12;
    float T121 = 1.0 - R12;
    float phi12 = 0.0;
    if ( iridescenceIOR < outsideIOR ) phi12 = PI;
    float phi21 = PI - phi12;
    vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
    vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
    vec3 phi23 = vec3( 0.0 );
    if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
    if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
    if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
    float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
    vec3 phi = vec3( phi21 ) + phi23;
    vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
    vec3 r123 = sqrt( R123 );
    vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
    vec3 C0 = R12 + Rs;
    I = C0;
    vec3 Cm = Rs - T121;
    for ( int m = 1; m <= 2; ++ m ) {
        Cm *= r123;
        vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
        I += Cm * Sm;
    }
    return max( I, vec3( 0.0 ) );
}
#endif`,
  cc = `#ifdef USE_BUMPMAP
uniform sampler2D bumpMap;
uniform float bumpScale;
vec2 dHdxy_fwd() {
    vec2 dSTdx = dFdx( vUv );
    vec2 dSTdy = dFdy( vUv );
    float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
    float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
    float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
    return vec2( dBx, dBy );
}
vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
    vec3 vSigmaX = dFdx( surf_pos.xyz );
    vec3 vSigmaY = dFdy( surf_pos.xyz );
    vec3 vN = surf_norm;
    vec3 R1 = cross( vSigmaY, vN );
    vec3 R2 = cross( vN, vSigmaX );
    float fDet = dot( vSigmaX, R1 ) * faceDirection;
    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
    return normalize( abs( fDet ) * surf_norm - vGrad );
}
#endif`,
  fc = `#if NUM_CLIPPING_PLANES > 0
vec4 plane;
#pragma unroll_loop_start
for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
    plane = clippingPlanes[ i ];
    if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
}
#pragma unroll_loop_end
#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
bool clipped = true;
#pragma unroll_loop_start
for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
    plane = clippingPlanes[ i ];
    clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
}
#pragma unroll_loop_end
if ( clipped ) discard;
#endif
#endif`,
  lc = `#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  dc = `#if NUM_CLIPPING_PLANES > 0
varying vec3 vClipPosition;
#endif`,
  uc = `#if NUM_CLIPPING_PLANES > 0
vClipPosition = - mvPosition.xyz;
#endif`,
  hc = `#if defined( USE_COLOR_ALPHA )
diffuseColor *= vColor;
#elif defined( USE_COLOR )
diffuseColor.rgb *= vColor;
#endif`,
  pc = `#if defined( USE_COLOR_ALPHA )
varying vec4 vColor;
#elif defined( USE_COLOR )
varying vec3 vColor;
#endif`,
  mc = `#if defined( USE_COLOR_ALPHA )
varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
varying vec3 vColor;
#endif`,
  gc = `#if defined( USE_COLOR_ALPHA )
vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
vColor.xyz *= instanceColor.xyz;
#endif`,
  bc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
    return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
float precisionSafeLength( vec3 v ) { return length( v ); }
#else
    float precisionSafeLength( vec3 v ) {
        float maxComponent = max3( abs( v ) );
        return length( v / maxComponent ) * maxComponent;
    }
#endif
struct IncidentLight {
    vec3 color;
    vec3 direction;
    bool visible;
};
struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};
struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
    #ifdef USE_CLEARCOAT
    vec3 clearcoatNormal;
    #endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
    mat3 tmp;
    tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
    tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
    tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
    return tmp;
}
float luminance( const in vec3 rgb ) {
    const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
    return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
    return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
    float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
    float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
    return vec2( u, v );
}`,
  _c = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0
float getFace( vec3 direction ) {
    vec3 absDirection = abs( direction );
    float face = - 1.0;
    if ( absDirection.x > absDirection.z ) {
        if ( absDirection.x > absDirection.y )
            face = direction.x > 0.0 ? 0.0 : 3.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
        if ( absDirection.z > absDirection.y )
            face = direction.z > 0.0 ? 2.0 : 5.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV( vec3 direction, float face ) {
    vec2 uv;
    if ( face == 0.0 ) {
        uv = vec2( direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 1.0 ) {
        uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
    } else if ( face == 2.0 ) {
        uv = vec2( - direction.x, direction.y ) / abs( direction.z );
    } else if ( face == 3.0 ) {
        uv = vec2( - direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 4.0 ) {
        uv = vec2( - direction.x, direction.z ) / abs( direction.y );
    } else {
        uv = vec2( direction.x, direction.y ) / abs( direction.z );
    }
    return 0.5 * ( uv + 1.0 );
}
vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
    float face = getFace( direction );
    float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
    mipInt = max( mipInt, cubeUV_minMipLevel );
    float faceSize = exp2( mipInt );
    vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
    if ( face > 2.0 ) {
        uv.y += faceSize;
        face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
    #ifdef texture2DGradEXT
    return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
    #else
        return texture2D( envMap, uv ).rgb;
    #endif
}
#define cubeUV_r0 1.0
#define cubeUV_v0 0.339
#define cubeUV_m0 - 2.0
#define cubeUV_r1 0.8
#define cubeUV_v1 0.276
#define cubeUV_m1 - 1.0
#define cubeUV_r4 0.4
#define cubeUV_v4 0.046
#define cubeUV_m4 2.0
#define cubeUV_r5 0.305
#define cubeUV_v5 0.016
#define cubeUV_m5 3.0
#define cubeUV_r6 0.21
#define cubeUV_v6 0.0038
#define cubeUV_m6 4.0
float roughnessToMip( float roughness ) {
    float mip = 0.0;
    if ( roughness >= cubeUV_r1 ) {
        mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
    } else if ( roughness >= cubeUV_r4 ) {
        mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
    } else if ( roughness >= cubeUV_r5 ) {
        mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
    } else if ( roughness >= cubeUV_r6 ) {
        mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
    } else {
        mip = - 2.0 * log2( 1.16 * roughness );		}
    return mip;
}
vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
    float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
    float mipF = fract( mip );
    float mipInt = floor( mip );
    vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
    if ( mipF == 0.0 ) {
        return vec4( color0, 1.0 );
    } else {
        vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
        return vec4( mix( color0, color1, mipF ), 1.0 );
    }
}
#endif`,
  xc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 m = mat3( instanceMatrix );
transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
#ifdef FLIP_SIDED
transformedTangent = - transformedTangent;
#endif
#endif`,
  vc = `#ifdef USE_DISPLACEMENTMAP
uniform sampler2D displacementMap;
uniform float displacementScale;
uniform float displacementBias;
#endif`,
  Mc = `#ifdef USE_DISPLACEMENTMAP
transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Sc = `#ifdef USE_EMISSIVEMAP
vec4 emissiveColor = texture2D( emissiveMap, vUv );
totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  yc = `#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif`,
  wc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Tc = `vec4 LinearToLinear( in vec4 value ) {
    return value;
}
vec4 LinearTosRGB( in vec4 value ) {
    return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Ec = `#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vec3 cameraToFrag;
if ( isOrthographic ) {
    cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
} else {
    cameraToFrag = normalize( vWorldPosition - cameraPosition );
}
vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
#ifdef ENVMAP_MODE_REFLECTION
vec3 reflectVec = reflect( cameraToFrag, worldNormal );
#else
    vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
#endif
#else
    vec3 reflectVec = vReflect;
#endif
#ifdef ENVMAP_TYPE_CUBE
vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
#elif defined( ENVMAP_TYPE_CUBE_UV )
vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
#else
    vec4 envColor = vec4( 0.0 );
#endif
#ifdef ENVMAP_BLENDING_MULTIPLY
outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
#elif defined( ENVMAP_BLENDING_MIX )
outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
#elif defined( ENVMAP_BLENDING_ADD )
outgoingLight += envColor.xyz * specularStrength * reflectivity;
#endif
#endif`,
  Ac = `#ifdef USE_ENVMAP
uniform float envMapIntensity;
uniform float flipEnvMap;
#ifdef ENVMAP_TYPE_CUBE
uniform samplerCube envMap;
#else
    uniform sampler2D envMap;
#endif

#endif`,
  Cc = `#ifdef USE_ENVMAP
uniform float reflectivity;
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS
varying vec3 vWorldPosition;
uniform float refractionRatio;
#else
    varying vec3 vReflect;
#endif
#endif`,
  Lc = `#ifdef USE_ENVMAP
#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
#define ENV_WORLDPOS
#endif
#ifdef ENV_WORLDPOS

varying vec3 vWorldPosition;
#else
    varying vec3 vReflect;
uniform float refractionRatio;
#endif
#endif`,
  Dc = `#ifdef USE_ENVMAP
#ifdef ENV_WORLDPOS
vWorldPosition = worldPosition.xyz;
#else
    vec3 cameraToVertex;
if ( isOrthographic ) {
    cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
} else {
    cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
}
vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
#ifdef ENVMAP_MODE_REFLECTION
vReflect = reflect( cameraToVertex, worldNormal );
#else
    vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
#endif
#endif
#endif`,
  Rc = `#ifdef USE_FOG
vFogDepth = - mvPosition.z;
#endif`,
  Pc = `#ifdef USE_FOG
varying float vFogDepth;
#endif`,
  Ic = `#ifdef USE_FOG
#ifdef FOG_EXP2
float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
#else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
#endif
gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Fc = `#ifdef USE_FOG
uniform vec3 fogColor;
varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
    uniform float fogNear;
uniform float fogFar;
#endif
#endif`,
  Nc = `#ifdef USE_GRADIENTMAP
uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
    float dotNL = dot( normal, lightDirection );
    vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
    #ifdef USE_GRADIENTMAP
    return vec3( texture2D( gradientMap, coord ).r );
    #else
        vec2 fw = fwidth( coord ) * 0.5;
    return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
    #endif
}`,
  Uc = `#ifdef USE_LIGHTMAP
vec4 lightMapTexel = texture2D( lightMap, vUv2 );
vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  zc = `#ifdef USE_LIGHTMAP
uniform sampler2D lightMap;
uniform float lightMapIntensity;
#endif`,
  Oc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Bc = `varying vec3 vViewPosition;
struct LambertMaterial {
    vec3 diffuseColor;
    float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
    float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,
  Gc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
    float x = normal.x, y = normal.y, z = normal.z;
    vec3 result = shCoefficients[ 0 ] * 0.886227;
    result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
    result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
    result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
    result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
    result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
    result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
    result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
    result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
    return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
    vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
    vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
    return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
    #if defined ( PHYSICALLY_CORRECT_LIGHTS )
    float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
    if ( cutoffDistance > 0.0 ) {
        distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
    }
    return distanceFalloff;
    #else
        if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
            return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
        }
    return 1.0;
    #endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
    return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
struct DirectionalLight {
    vec3 direction;
    vec3 color;
};
uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
    light.color = directionalLight.color;
    light.direction = directionalLight.direction;
    light.visible = true;
}
#endif
#if NUM_POINT_LIGHTS > 0
struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
};
uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
    vec3 lVector = pointLight.position - geometry.position;
    light.direction = normalize( lVector );
    float lightDistance = length( lVector );
    light.color = pointLight.color;
    light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
    light.visible = ( light.color != vec3( 0.0 ) );
}
#endif
#if NUM_SPOT_LIGHTS > 0
struct SpotLight {
    vec3 position;
    vec3 direction;
    vec3 color;
    float distance;
    float decay;
    float coneCos;
    float penumbraCos;
};
uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
    vec3 lVector = spotLight.position - geometry.position;
    light.direction = normalize( lVector );
    float angleCos = dot( light.direction, spotLight.direction );
    float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
    if ( spotAttenuation > 0.0 ) {
        float lightDistance = length( lVector );
        light.color = spotLight.color * spotAttenuation;
        light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
        light.visible = ( light.color != vec3( 0.0 ) );
    } else {
        light.color = vec3( 0.0 );
        light.visible = false;
    }
}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
struct RectAreaLight {
    vec3 color;
    vec3 position;
    vec3 halfWidth;
    vec3 halfHeight;
};
uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
struct HemisphereLight {
    vec3 direction;
    vec3 skyColor;
    vec3 groundColor;
};
uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
    float dotNL = dot( normal, hemiLight.direction );
    float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
    vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
    return irradiance;
}
#endif`,
  Vc = `#if defined( USE_ENVMAP )
vec3 getIBLIrradiance( const in vec3 normal ) {
    #if defined( ENVMAP_TYPE_CUBE_UV )
    vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
    vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
    return PI * envMapColor.rgb * envMapIntensity;
    #else
        return vec3( 0.0 );
    #endif
}
vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
    #if defined( ENVMAP_TYPE_CUBE_UV )
    vec3 reflectVec = reflect( - viewDir, normal );
    reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
    reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
    vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
    return envMapColor.rgb * envMapIntensity;
    #else
        return vec3( 0.0 );
    #endif
}
#endif`,
  kc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Wc = `varying vec3 vViewPosition;
struct ToonMaterial {
    vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
    vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  Hc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  qc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
    vec3 diffuseColor;
    vec3 specularColor;
    float specularShininess;
    float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
    float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  Xc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
material.ior = ior;
#ifdef SPECULAR
float specularIntensityFactor = specularIntensity;
vec3 specularColorFactor = specularColor;
#ifdef USE_SPECULARINTENSITYMAP
specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
#endif
#ifdef USE_SPECULARCOLORMAP
specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
#endif
material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
#else
    float specularIntensityFactor = 1.0;
vec3 specularColorFactor = vec3( 1.0 );
material.specularF90 = 1.0;
#endif
material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
    material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
material.clearcoat = clearcoat;
material.clearcoatRoughness = clearcoatRoughness;
material.clearcoatF0 = vec3( 0.04 );
material.clearcoatF90 = 1.0;
#ifdef USE_CLEARCOATMAP
material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
#endif
material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
material.clearcoatRoughness += geometryRoughness;
material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
material.iridescence = iridescence;
material.iridescenceIOR = iridescenceIOR;
#ifdef USE_IRIDESCENCEMAP
material.iridescence *= texture2D( iridescenceMap, vUv ).r;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
#else
    material.iridescenceThickness = iridescenceThicknessMaximum;
#endif
#endif
#ifdef USE_SHEEN
material.sheenColor = sheenColor;
#ifdef USE_SHEENCOLORMAP
material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
#endif
material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#ifdef USE_SHEENROUGHNESSMAP
material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
#endif
#endif`,
  Yc = `struct PhysicalMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
    #ifdef USE_CLEARCOAT
    float clearcoat;
    float clearcoatRoughness;
    vec3 clearcoatF0;
    float clearcoatF90;
    #endif
    #ifdef USE_IRIDESCENCE
    float iridescence;
    float iridescenceIOR;
    float iridescenceThickness;
    vec3 iridescenceFresnel;
    vec3 iridescenceF0;
    #endif
    #ifdef USE_SHEEN
    vec3 sheenColor;
    float sheenRoughness;
    #endif
    #ifdef IOR
    float ior;
    #endif
    #ifdef USE_TRANSMISSION
    float transmission;
    float transmissionAlpha;
    float thickness;
    float attenuationDistance;
    vec3 attenuationColor;
    #endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
    float dotNV = saturate( dot( normal, viewDir ) );
    float r2 = roughness * roughness;
    float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
    float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
    float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
    return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
    float dotNV = saturate( dot( normal, viewDir ) );
    const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
    const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
    vec4 r = roughness * c0 + c1;
    float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
    vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
    return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
    vec2 fab = DFGApprox( normal, viewDir, roughness );
    return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
    #else
        void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
            #endif
            vec2 fab = DFGApprox( normal, viewDir, roughness );
            #ifdef USE_IRIDESCENCE
            vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
            #else
                vec3 Fr = specularColor;
            #endif
            vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
            float Ess = fab.x + fab.y;
            float Ems = 1.0 - Ess;
            vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
            singleScatter += FssEss;
            multiScatter += Fms * Ems;
        }
    #if NUM_RECT_AREA_LIGHTS > 0
    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 normal = geometry.normal;
        vec3 viewDir = geometry.viewDir;
        vec3 position = geometry.position;
        vec3 lightPos = rectAreaLight.position;
        vec3 halfWidth = rectAreaLight.halfWidth;
        vec3 halfHeight = rectAreaLight.halfHeight;
        vec3 lightColor = rectAreaLight.color;
        float roughness = material.roughness;
        vec3 rectCoords[ 4 ];
        rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
        rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
        rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
        vec2 uv = LTC_Uv( normal, viewDir, roughness );
        vec4 t1 = texture2D( ltc_1, uv );
        vec4 t2 = texture2D( ltc_2, uv );
        mat3 mInv = mat3(
            vec3( t1.x, 0, t1.y ),
            vec3(    0, 1,    0 ),
            vec3( t1.z, 0, t1.w )
        );
        vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
        reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
        reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
    }
    #endif
    void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
        vec3 irradiance = dotNL * directLight.color;
        #ifdef USE_CLEARCOAT
        float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
        vec3 ccIrradiance = dotNLcc * directLight.color;
        clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
        #endif
        #ifdef USE_SHEEN
        sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
        #endif
        #ifdef USE_IRIDESCENCE
        reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
        #else
            reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
        #endif
        reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    }
    void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
    }
    void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
        #ifdef USE_CLEARCOAT
        clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
        #endif
        #ifdef USE_SHEEN
        sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
        #endif
        vec3 singleScattering = vec3( 0.0 );
        vec3 multiScattering = vec3( 0.0 );
        vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
        #ifdef USE_IRIDESCENCE
        computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
        #else
            computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
        #endif
        vec3 totalScattering = singleScattering + multiScattering;
        vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
        reflectedLight.indirectSpecular += radiance * singleScattering;
        reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
        reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
    }
    #define RE_Direct				RE_Direct_Physical
    #define RE_Direct_RectArea		RE_Direct_RectArea_Physical
    #define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
    #define RE_IndirectSpecular		RE_IndirectSpecular_Physical
    float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
        return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
    }`,
  jc = `
    GeometricContext geometry;
    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
    #ifdef USE_CLEARCOAT
    geometry.clearcoatNormal = clearcoatNormal;
    #endif
    #ifdef USE_IRIDESCENCE
    float dotNVi = saturate( dot( normal, geometry.viewDir ) );
    if ( material.iridescenceThickness == 0.0 ) {
        material.iridescence = 0.0;
    } else {
        material.iridescence = saturate( material.iridescence );
    }
    if ( material.iridescence > 0.0 ) {
        material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
        material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
    }
    #endif
    IncidentLight directLight;
    #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
        pointLight = pointLights[ i ];
        getPointLightInfo( pointLight, geometry, directLight );
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
        pointLightShadow = pointLightShadows[ i ];
        directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
    }
    #pragma unroll_loop_end
    #endif
    #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
    SpotLight spotLight;
    vec4 spotColor;
    vec3 spotLightCoord;
    bool inSpotLightMap;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
        spotLight = spotLights[ i ];
        getSpotLightInfo( spotLight, geometry, directLight );
        #if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
            #define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
        #elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
        #define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
        #else
            #define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
        #endif
        #if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
            spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
        inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
        spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
        directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
        #endif
        #undef SPOT_LIGHT_MAP_INDEX
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
        spotLightShadow = spotLightShadows[ i ];
        directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
    }
    #pragma unroll_loop_end
    #endif
    #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
        directionalLight = directionalLights[ i ];
        getDirectionalLightInfo( directionalLight, geometry, directLight );
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
        directionalLightShadow = directionalLightShadows[ i ];
        directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
        #endif
        RE_Direct( directLight, geometry, material, reflectedLight );
    }
    #pragma unroll_loop_end
    #endif
    #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
    RectAreaLight rectAreaLight;
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
        rectAreaLight = rectAreaLights[ i ];
        RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
    }
    #pragma unroll_loop_end
    #endif
    #if defined( RE_IndirectDiffuse )
    vec3 iblIrradiance = vec3( 0.0 );
    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
    irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #if ( NUM_HEMI_LIGHTS > 0 )
        #pragma unroll_loop_start
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
        irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
    }
    #pragma unroll_loop_end
    #endif
    #endif
    #if defined( RE_IndirectSpecular )
    vec3 radiance = vec3( 0.0 );
    vec3 clearcoatRadiance = vec3( 0.0 );
    #endif`,
  Zc = `#if defined( RE_IndirectDiffuse )
    #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vUv2 );
    vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
    irradiance += lightMapIrradiance;
    #endif
    #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
    iblIrradiance += getIBLIrradiance( geometry.normal );
    #endif
    #endif
    #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
    radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
    #ifdef USE_CLEARCOAT
    clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
    #endif
    #endif`,
  $c = `#if defined( RE_IndirectDiffuse )
    RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
    #endif
    #if defined( RE_IndirectSpecular )
    RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
    #endif`,
  Kc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
    gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
    #endif`,
  Jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
    uniform float logDepthBufFC;
    varying float vFragDepth;
    varying float vIsPerspective;
    #endif`,
  Qc = `#ifdef USE_LOGDEPTHBUF
    #ifdef USE_LOGDEPTHBUF_EXT
    varying float vFragDepth;
    varying float vIsPerspective;
    #else
        uniform float logDepthBufFC;
    #endif
    #endif`,
  ef = `#ifdef USE_LOGDEPTHBUF
    #ifdef USE_LOGDEPTHBUF_EXT
    vFragDepth = 1.0 + gl_Position.w;
    vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
    #else
        if ( isPerspectiveMatrix( projectionMatrix ) ) {
            gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
            gl_Position.z *= gl_Position.w;
        }
    #endif
    #endif`,
  tf = `#ifdef USE_MAP
    vec4 sampledDiffuseColor = texture2D( map, vUv );
    #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
    #endif`,
  nf = `#ifdef USE_MAP
    uniform sampler2D map;
    #endif`,
  af = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
    vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
    #endif
    #ifdef USE_MAP
    diffuseColor *= texture2D( map, uv );
    #endif
    #ifdef USE_ALPHAMAP
    diffuseColor.a *= texture2D( alphaMap, uv ).g;
    #endif`,
  rf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
    uniform mat3 uvTransform;
    #endif
    #ifdef USE_MAP
    uniform sampler2D map;
    #endif
    #ifdef USE_ALPHAMAP
    uniform sampler2D alphaMap;
    #endif`,
  sf = `float metalnessFactor = metalness;
    #ifdef USE_METALNESSMAP
    vec4 texelMetalness = texture2D( metalnessMap, vUv );
    metalnessFactor *= texelMetalness.b;
    #endif`,
  of = `#ifdef USE_METALNESSMAP
    uniform sampler2D metalnessMap;
    #endif`,
  cf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
    vColor *= morphTargetBaseInfluence;
    for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
        #if defined( USE_COLOR_ALPHA )
        if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
        #elif defined( USE_COLOR )
        if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
        #endif
    }
    #endif`,
  ff = `#ifdef USE_MORPHNORMALS
    objectNormal *= morphTargetBaseInfluence;
    #ifdef MORPHTARGETS_TEXTURE
    for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
        if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
    }
    #else
        objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
    objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
    objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
    objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
    #endif
    #endif`,
  lf = `#ifdef USE_MORPHTARGETS
    uniform float morphTargetBaseInfluence;
    #ifdef MORPHTARGETS_TEXTURE
    uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
    uniform sampler2DArray morphTargetsTexture;
    uniform ivec2 morphTargetsTextureSize;
    vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
        int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
        int y = texelIndex / morphTargetsTextureSize.x;
        int x = texelIndex - y * morphTargetsTextureSize.x;
        ivec3 morphUV = ivec3( x, y, morphTargetIndex );
        return texelFetch( morphTargetsTexture, morphUV, 0 );
    }
    #else
        #ifndef USE_MORPHNORMALS
    uniform float morphTargetInfluences[ 8 ];
    #else
        uniform float morphTargetInfluences[ 4 ];
    #endif
    #endif
    #endif`,
  df = `#ifdef USE_MORPHTARGETS
    transformed *= morphTargetBaseInfluence;
    #ifdef MORPHTARGETS_TEXTURE
    for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
        if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
    }
    #else
        transformed += morphTarget0 * morphTargetInfluences[ 0 ];
    transformed += morphTarget1 * morphTargetInfluences[ 1 ];
    transformed += morphTarget2 * morphTargetInfluences[ 2 ];
    transformed += morphTarget3 * morphTargetInfluences[ 3 ];
    #ifndef USE_MORPHNORMALS
    transformed += morphTarget4 * morphTargetInfluences[ 4 ];
    transformed += morphTarget5 * morphTargetInfluences[ 5 ];
    transformed += morphTarget6 * morphTargetInfluences[ 6 ];
    transformed += morphTarget7 * morphTargetInfluences[ 7 ];
    #endif
    #endif
    #endif`,
  uf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
    #ifdef FLAT_SHADED
    vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
    vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
    vec3 normal = normalize( cross( fdx, fdy ) );
    #else
        vec3 normal = normalize( vNormal );
    #ifdef DOUBLE_SIDED
    normal = normal * faceDirection;
    #endif
    #ifdef USE_TANGENT
    vec3 tangent = normalize( vTangent );
    vec3 bitangent = normalize( vBitangent );
    #ifdef DOUBLE_SIDED
    tangent = tangent * faceDirection;
    bitangent = bitangent * faceDirection;
    #endif
    #if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
    mat3 vTBN = mat3( tangent, bitangent, normal );
    #endif
    #endif
    #endif
    vec3 geometryNormal = normal;`,
  hf = `#ifdef OBJECTSPACE_NORMALMAP
    normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
    #ifdef FLIP_SIDED
    normal = - normal;
    #endif
    #ifdef DOUBLE_SIDED
    normal = normal * faceDirection;
    #endif
    normal = normalize( normalMatrix * normal );
    #elif defined( TANGENTSPACE_NORMALMAP )
    vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;
    #ifdef USE_TANGENT
    normal = normalize( vTBN * mapN );
    #else
        normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
    #endif
    #elif defined( USE_BUMPMAP )
    normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
    #endif`,
  pf = `#ifndef FLAT_SHADED
    varying vec3 vNormal;
    #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
    #endif
    #endif`,
  mf = `#ifndef FLAT_SHADED
    varying vec3 vNormal;
    #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
    #endif
    #endif`,
  gf = `#ifndef FLAT_SHADED
    vNormal = normalize( transformedNormal );
    #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #endif
    #endif`,
  bf = `#ifdef USE_NORMALMAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
    #endif
    #ifdef OBJECTSPACE_NORMALMAP
    uniform mat3 normalMatrix;
    #endif
    #if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
    vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
        vec3 q0 = dFdx( eye_pos.xyz );
        vec3 q1 = dFdy( eye_pos.xyz );
        vec2 st0 = dFdx( vUv.st );
        vec2 st1 = dFdy( vUv.st );
        vec3 N = surf_norm;
        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );
        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;
        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
        return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
    }
    #endif`,
  _f = `#ifdef USE_CLEARCOAT
    vec3 clearcoatNormal = geometryNormal;
    #endif`,
  xf = `#ifdef USE_CLEARCOAT_NORMALMAP
    vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
    clearcoatMapN.xy *= clearcoatNormalScale;
    #ifdef USE_TANGENT
    clearcoatNormal = normalize( vTBN * clearcoatMapN );
    #else
        clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
    #endif
    #endif`,
  vf = `#ifdef USE_CLEARCOATMAP
    uniform sampler2D clearcoatMap;
    #endif
    #ifdef USE_CLEARCOAT_ROUGHNESSMAP
    uniform sampler2D clearcoatRoughnessMap;
    #endif
    #ifdef USE_CLEARCOAT_NORMALMAP
    uniform sampler2D clearcoatNormalMap;
    uniform vec2 clearcoatNormalScale;
    #endif`,
  Mf = `#ifdef USE_IRIDESCENCEMAP
    uniform sampler2D iridescenceMap;
    #endif
    #ifdef USE_IRIDESCENCE_THICKNESSMAP
    uniform sampler2D iridescenceThicknessMap;
    #endif`,
  Sf = `#ifdef OPAQUE
    diffuseColor.a = 1.0;
    #endif
    #ifdef USE_TRANSMISSION
    diffuseColor.a *= material.transmissionAlpha + 0.1;
    #endif
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  yf = `vec3 packNormalToRGB( const in vec3 normal ) {
        return normalize( normal ) * 0.5 + 0.5;
    }
    vec3 unpackRGBToNormal( const in vec3 rgb ) {
        return 2.0 * rgb.xyz - 1.0;
    }
    const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
    const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
    const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
    const float ShiftRight8 = 1. / 256.;
    vec4 packDepthToRGBA( const in float v ) {
        vec4 r = vec4( fract( v * PackFactors ), v );
        r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
    }
    float unpackRGBAToDepth( const in vec4 v ) {
        return dot( v, UnpackFactors );
    }
    vec4 pack2HalfToRGBA( vec2 v ) {
        vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
        return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
    }
    vec2 unpackRGBATo2Half( vec4 v ) {
        return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
    }
    float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
        return ( viewZ + near ) / ( near - far );
    }
    float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
        return linearClipZ * ( near - far ) - near;
    }
    float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
        return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
    }
    float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
        return ( near * far ) / ( ( far - near ) * invClipZ - far );
    }`,
  wf = `#ifdef PREMULTIPLIED_ALPHA
    gl_FragColor.rgb *= gl_FragColor.a;
    #endif`,
  Tf = `vec4 mvPosition = vec4( transformed, 1.0 );
    #ifdef USE_INSTANCING
    mvPosition = instanceMatrix * mvPosition;
    #endif
    mvPosition = modelViewMatrix * mvPosition;
    gl_Position = projectionMatrix * mvPosition;`,
  Ef = `#ifdef DITHERING
    gl_FragColor.rgb = dithering( gl_FragColor.rgb );
    #endif`,
  Af = `#ifdef DITHERING
    vec3 dithering( vec3 color ) {
        float grid_position = rand( gl_FragCoord.xy );
        vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
        dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
        return color + dither_shift_RGB;
    }
    #endif`,
  Cf = `float roughnessFactor = roughness;
    #ifdef USE_ROUGHNESSMAP
    vec4 texelRoughness = texture2D( roughnessMap, vUv );
    roughnessFactor *= texelRoughness.g;
    #endif`,
  Lf = `#ifdef USE_ROUGHNESSMAP
    uniform sampler2D roughnessMap;
    #endif`,
  Df = `#if NUM_SPOT_LIGHT_COORDS > 0
    varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
    #endif
    #if NUM_SPOT_LIGHT_MAPS > 0
    uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
    #endif
    #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
    #endif
    #if NUM_SPOT_LIGHT_SHADOWS > 0
    uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
    struct SpotLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
    #endif
    #if NUM_POINT_LIGHT_SHADOWS > 0
    uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
        float shadowCameraNear;
        float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
    #endif
    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
    }
    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
        return unpackRGBATo2Half( texture2D( shadow, uv ) );
    }
    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
        float occlusion = 1.0;
        vec2 distribution = texture2DDistribution( shadow, uv );
        float hard_shadow = step( compare , distribution.x );
        if (hard_shadow != 1.0 ) {
            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
        }
        return occlusion;
    }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
        float shadow = 1.0;
        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;
        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );
        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
        bool frustumTest = all( frustumTestVec );
        if ( frustumTest ) {
            #if defined( SHADOWMAP_TYPE_PCF )
            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx0 = - texelSize.x * shadowRadius;
            float dy0 = - texelSize.y * shadowRadius;
            float dx1 = + texelSize.x * shadowRadius;
            float dy1 = + texelSize.y * shadowRadius;
            float dx2 = dx0 / 2.0;
            float dy2 = dy0 / 2.0;
            float dx3 = dx1 / 2.0;
            float dy3 = dy1 / 2.0;
            shadow = (
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
            ) * ( 1.0 / 17.0 );
            #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx = texelSize.x;
            float dy = texelSize.y;
            vec2 uv = shadowCoord.xy;
            vec2 f = fract( uv * shadowMapSize + 0.5 );
            uv -= f * texelSize;
            shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                    texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                    f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                    texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                    f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                    texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                    f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                    texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                    f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                    texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                    f.x ),
                    mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                        texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                        f.x ),
                    f.y )
            ) * ( 1.0 / 9.0 );
            #elif defined( SHADOWMAP_TYPE_VSM )
            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
            #else
                shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
            #endif
        }
        return shadow;
    }
    vec2 cubeToUV( vec3 v, float texelSizeY ) {
        vec3 absV = abs( v );
        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
        vec2 planar = v.xy;
        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;
        if ( absV.z >= almostOne ) {
            if ( v.z > 0.0 )
                planar.x = 4.0 - v.x;
        } else if ( absV.x >= almostOne ) {
            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;
        } else if ( absV.y >= almostOne ) {
            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;
        }
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
    }
    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
        vec3 lightToPosition = shadowCoord.xyz;
        float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
        vec3 bd3D = normalize( lightToPosition );
        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
        vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
        return (
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
        ) * ( 1.0 / 9.0 );
        #else
            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
        #endif
    }
    #endif`,
  Rf = `#if NUM_SPOT_LIGHT_COORDS > 0
    uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
    varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
    #endif
    #ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
    #endif
    #if NUM_SPOT_LIGHT_SHADOWS > 0
    struct SpotLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
    #endif
    #if NUM_POINT_LIGHT_SHADOWS > 0
    uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
        float shadowCameraNear;
        float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
    #endif
    #endif`,
  Pf = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
    #if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
    vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
    vec4 shadowWorldPosition;
    #endif
    #if NUM_DIR_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
        shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
        vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
    #endif
    #if NUM_SPOT_LIGHT_COORDS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
        shadowWorldPosition = worldPosition;
        #if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
            shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
        #endif
        vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
    #endif
    #if NUM_POINT_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
        shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
        vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
    #endif
    #endif`,
  If = `float getShadowMask() {
        float shadow = 1.0;
        #ifdef USE_SHADOWMAP
        #if NUM_DIR_LIGHT_SHADOWS > 0
        DirectionalLightShadow directionalLight;
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
            directionalLight = directionalLightShadows[ i ];
            shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
        }
        #pragma unroll_loop_end
        #endif
        #if NUM_SPOT_LIGHT_SHADOWS > 0
        SpotLightShadow spotLight;
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
            spotLight = spotLightShadows[ i ];
            shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        }
        #pragma unroll_loop_end
        #endif
        #if NUM_POINT_LIGHT_SHADOWS > 0
        PointLightShadow pointLight;
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
            pointLight = pointLightShadows[ i ];
            shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
        }
        #pragma unroll_loop_end
        #endif
        #endif
        return shadow;
    }`,
  Ff = `#ifdef USE_SKINNING
    mat4 boneMatX = getBoneMatrix( skinIndex.x );
    mat4 boneMatY = getBoneMatrix( skinIndex.y );
    mat4 boneMatZ = getBoneMatrix( skinIndex.z );
    mat4 boneMatW = getBoneMatrix( skinIndex.w );
    #endif`,
  Nf = `#ifdef USE_SKINNING
    uniform mat4 bindMatrix;
    uniform mat4 bindMatrixInverse;
    uniform highp sampler2D boneTexture;
    uniform int boneTextureSize;
    mat4 getBoneMatrix( const in float i ) {
        float j = i * 4.0;
        float x = mod( j, float( boneTextureSize ) );
        float y = floor( j / float( boneTextureSize ) );
        float dx = 1.0 / float( boneTextureSize );
        float dy = 1.0 / float( boneTextureSize );
        y = dy * ( y + 0.5 );
        vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
        vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
        vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
        vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
        mat4 bone = mat4( v1, v2, v3, v4 );
        return bone;
    }
    #endif`,
  Uf = `#ifdef USE_SKINNING
    vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
    vec4 skinned = vec4( 0.0 );
    skinned += boneMatX * skinVertex * skinWeight.x;
    skinned += boneMatY * skinVertex * skinWeight.y;
    skinned += boneMatZ * skinVertex * skinWeight.z;
    skinned += boneMatW * skinVertex * skinWeight.w;
    transformed = ( bindMatrixInverse * skinned ).xyz;
    #endif`,
  zf = `#ifdef USE_SKINNING
    mat4 skinMatrix = mat4( 0.0 );
    skinMatrix += skinWeight.x * boneMatX;
    skinMatrix += skinWeight.y * boneMatY;
    skinMatrix += skinWeight.z * boneMatZ;
    skinMatrix += skinWeight.w * boneMatW;
    skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
    objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
    #ifdef USE_TANGENT
    objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
    #endif
    #endif`,
  Of = `float specularStrength;
    #ifdef USE_SPECULARMAP
    vec4 texelSpecular = texture2D( specularMap, vUv );
    specularStrength = texelSpecular.r;
    #else
        specularStrength = 1.0;
    #endif`,
  Bf = `#ifdef USE_SPECULARMAP
    uniform sampler2D specularMap;
    #endif`,
  Gf = `#if defined( TONE_MAPPING )
    gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
    #endif`,
  Vf = `#ifndef saturate
    #define saturate( a ) clamp( a, 0.0, 1.0 )
    #endif
    uniform float toneMappingExposure;
    vec3 LinearToneMapping( vec3 color ) {
        return toneMappingExposure * color;
    }
    vec3 ReinhardToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( color / ( vec3( 1.0 ) + color ) );
    }
    vec3 OptimizedCineonToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        color = max( vec3( 0.0 ), color - 0.004 );
        return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
    }
    vec3 RRTAndODTFit( vec3 v ) {
        vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
        vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
        return a / b;
    }
    vec3 ACESFilmicToneMapping( vec3 color ) {
        const mat3 ACESInputMat = mat3(
            vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
            vec3( 0.04823, 0.01566, 0.83777 )
        );
        const mat3 ACESOutputMat = mat3(
            vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
            vec3( -0.07367, -0.00605,  1.07602 )
        );
        color *= toneMappingExposure / 0.6;
        color = ACESInputMat * color;
        color = RRTAndODTFit( color );
        color = ACESOutputMat * color;
        return saturate( color );
    }
    vec3 CustomToneMapping( vec3 color ) { return color; }`,
  kf = `#ifdef USE_TRANSMISSION
    material.transmission = transmission;
    material.transmissionAlpha = 1.0;
    material.thickness = thickness;
    material.attenuationDistance = attenuationDistance;
    material.attenuationColor = attenuationColor;
    #ifdef USE_TRANSMISSIONMAP
    material.transmission *= texture2D( transmissionMap, vUv ).r;
    #endif
    #ifdef USE_THICKNESSMAP
    material.thickness *= texture2D( thicknessMap, vUv ).g;
    #endif
    vec3 pos = vWorldPosition;
    vec3 v = normalize( cameraPosition - pos );
    vec3 n = inverseTransformDirection( normal, viewMatrix );
    vec4 transmission = getIBLVolumeRefraction(
        n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
        pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
        material.attenuationColor, material.attenuationDistance );
    material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
    totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
    #endif`,
  Wf = `#ifdef USE_TRANSMISSION
    uniform float transmission;
    uniform float thickness;
    uniform float attenuationDistance;
    uniform vec3 attenuationColor;
    #ifdef USE_TRANSMISSIONMAP
    uniform sampler2D transmissionMap;
    #endif
    #ifdef USE_THICKNESSMAP
    uniform sampler2D thicknessMap;
    #endif
    uniform vec2 transmissionSamplerSize;
    uniform sampler2D transmissionSamplerMap;
    uniform mat4 modelMatrix;
    uniform mat4 projectionMatrix;
    varying vec3 vWorldPosition;
    vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
        vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
        vec3 modelScale;
        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
        return normalize( refractionVector ) * thickness * modelScale;
    }
    float applyIorToRoughness( const in float roughness, const in float ior ) {
        return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
    }
    vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
        float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        #ifdef texture2DLodEXT
        return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
        #else
            return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
        #endif
    }
    vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
        if ( attenuationDistance == 0.0 ) {
            return radiance;
        } else {
            vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
            vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
        }
    }
    vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
        const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
        const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
        const in vec3 attenuationColor, const in float attenuationDistance ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;
        vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;
        vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
        vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
        vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
        return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
    }
    #endif`,
  Hf = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
        varying vec2 vUv;
    #endif`,
  qf = `#ifdef USE_UV
    #ifdef UVS_VERTEX_ONLY
    vec2 vUv;
    #else
        varying vec2 vUv;
    #endif
    uniform mat3 uvTransform;
    #endif`,
  Xf = `#ifdef USE_UV
    vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif`,
  Yf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
    #endif`,
  jf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
    #endif`,
  Zf = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif`,
  $f = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
    vec4 worldPosition = vec4( transformed, 1.0 );
    #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
    #endif
    worldPosition = modelMatrix * worldPosition;
    #endif`;
const Kf = `varying vec2 vUv;
    uniform mat3 uvTransform;
    void main() {
        vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
        gl_Position = vec4( position.xy, 1.0, 1.0 );
    }`,
  Jf = `uniform sampler2D t2D;
    varying vec2 vUv;
    void main() {
        gl_FragColor = texture2D( t2D, vUv );
        #ifdef DECODE_VIDEO_TEXTURE
        gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
        #endif
        #include <tonemapping_fragment>
            #include <encodings_fragment>
    }`,
  Qf = `varying vec3 vWorldDirection;
    #include <common>
        void main() {
            vWorldDirection = transformDirection( position, modelMatrix );
            #include <begin_vertex>
                #include <project_vertex>
                gl_Position.z = gl_Position.w;
        }`,
  el = `#include <envmap_common_pars_fragment>
        uniform float opacity;
    varying vec3 vWorldDirection;
    #include <cube_uv_reflection_fragment>
        void main() {
            vec3 vReflect = vWorldDirection;
            #include <envmap_fragment>
                gl_FragColor = envColor;
            gl_FragColor.a *= opacity;
            #include <tonemapping_fragment>
                #include <encodings_fragment>
        }`,
  tl = `#include <common>
        #include <uv_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        varying vec2 vHighPrecisionZW;
    void main() {
        #include <uv_vertex>
            #include <skinbase_vertex>
            #ifdef USE_DISPLACEMENTMAP
        #include <beginnormal_vertex>
            #include <morphnormal_vertex>
            #include <skinnormal_vertex>
            #endif
        #include <begin_vertex>
            #include <morphtarget_vertex>
            #include <skinning_vertex>
            #include <displacementmap_vertex>
            #include <project_vertex>
            #include <logdepthbuf_vertex>
            #include <clipping_planes_vertex>
            vHighPrecisionZW = gl_Position.zw;
    }`,
  nl = `#if DEPTH_PACKING == 3200
    uniform float opacity;
    #endif
    #include <common>
        #include <packing>
        #include <uv_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        varying vec2 vHighPrecisionZW;
    void main() {
        #include <clipping_planes_fragment>
            vec4 diffuseColor = vec4( 1.0 );
        #if DEPTH_PACKING == 3200
        diffuseColor.a = opacity;
        #endif
        #include <map_fragment>
            #include <alphamap_fragment>
            #include <alphatest_fragment>
            #include <logdepthbuf_fragment>
            float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
        #if DEPTH_PACKING == 3200
        gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
        #elif DEPTH_PACKING == 3201
        gl_FragColor = packDepthToRGBA( fragCoordZ );
        #endif
    }`,
  il = `#define DISTANCE
    varying vec3 vWorldPosition;
    #include <common>
        #include <uv_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <skinbase_vertex>
                #ifdef USE_DISPLACEMENTMAP
            #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinnormal_vertex>
                #endif
            #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <worldpos_vertex>
                #include <clipping_planes_vertex>
                vWorldPosition = worldPosition.xyz;
        }`,
  al = `#define DISTANCE
    uniform vec3 referencePosition;
    uniform float nearDistance;
    uniform float farDistance;
    varying vec3 vWorldPosition;
    #include <common>
        #include <packing>
        #include <uv_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main () {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( 1.0 );
            #include <map_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                float dist = length( vWorldPosition - referencePosition );
            dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
            dist = saturate( dist );
            gl_FragColor = packDepthToRGBA( dist );
        }`,
  rl = `varying vec3 vWorldDirection;
    #include <common>
        void main() {
            vWorldDirection = transformDirection( position, modelMatrix );
            #include <begin_vertex>
                #include <project_vertex>
        }`,
  sl = `uniform sampler2D tEquirect;
    varying vec3 vWorldDirection;
    #include <common>
        void main() {
            vec3 direction = normalize( vWorldDirection );
            vec2 sampleUV = equirectUv( direction );
            gl_FragColor = texture2D( tEquirect, sampleUV );
            #include <tonemapping_fragment>
                #include <encodings_fragment>
        }`,
  ol = `uniform float scale;
    attribute float lineDistance;
    varying float vLineDistance;
    #include <common>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            vLineDistance = scale * lineDistance;
            #include <color_vertex>
                #include <morphcolor_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #include <fog_vertex>
        }`,
  cl = `uniform vec3 diffuse;
    uniform float opacity;
    uniform float dashSize;
    uniform float totalSize;
    varying float vLineDistance;
    #include <common>
        #include <color_pars_fragment>
        #include <fog_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                if ( mod( vLineDistance, totalSize ) > dashSize ) {
                    discard;
                }
            vec3 outgoingLight = vec3( 0.0 );
            vec4 diffuseColor = vec4( diffuse, opacity );
            #include <logdepthbuf_fragment>
                #include <color_fragment>
                outgoingLight = diffuseColor.rgb;
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
        }`,
  fl = `#include <common>
        #include <uv_pars_vertex>
        #include <uv2_pars_vertex>
        #include <envmap_pars_vertex>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <uv2_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
            #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #endif
            #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #include <worldpos_vertex>
                #include <envmap_vertex>
                #include <fog_vertex>
        }`,
  ll = `uniform vec3 diffuse;
    uniform float opacity;
    #ifndef FLAT_SHADED
    varying vec3 vNormal;
    #endif
    #include <common>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <uv2_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <aomap_pars_fragment>
        #include <lightmap_pars_fragment>
        #include <envmap_common_pars_fragment>
        #include <envmap_pars_fragment>
        #include <fog_pars_fragment>
        #include <specularmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <specularmap_fragment>
                ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            #ifdef USE_LIGHTMAP
            vec4 lightMapTexel = texture2D( lightMap, vUv2 );
            reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
            #else
                reflectedLight.indirectDiffuse += vec3( 1.0 );
            #endif
            #include <aomap_fragment>
                reflectedLight.indirectDiffuse *= diffuseColor.rgb;
            vec3 outgoingLight = reflectedLight.indirectDiffuse;
            #include <envmap_fragment>
                #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  dl = `#define LAMBERT
    varying vec3 vViewPosition;
    #include <common>
        #include <uv_pars_vertex>
        #include <uv2_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <envmap_pars_vertex>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <shadowmap_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <uv2_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                vViewPosition = - mvPosition.xyz;
            #include <worldpos_vertex>
                #include <envmap_vertex>
                #include <shadowmap_vertex>
                #include <fog_vertex>
        }`,
  ul = `#define LAMBERT
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform float opacity;
    #include <common>
        #include <packing>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <uv2_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <aomap_pars_fragment>
        #include <lightmap_pars_fragment>
        #include <emissivemap_pars_fragment>
        #include <envmap_common_pars_fragment>
        #include <envmap_pars_fragment>
        #include <fog_pars_fragment>
        #include <bsdfs>
        #include <lights_pars_begin>
        #include <normal_pars_fragment>
        #include <lights_lambert_pars_fragment>
        #include <shadowmap_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <specularmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            vec3 totalEmissiveRadiance = emissive;
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <specularmap_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                #include <emissivemap_fragment>
                #include <lights_lambert_fragment>
                #include <lights_fragment_begin>
                #include <lights_fragment_maps>
                #include <lights_fragment_end>
                #include <aomap_fragment>
                vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
            #include <envmap_fragment>
                #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  hl = `#define MATCAP
    varying vec3 vViewPosition;
    #include <common>
        #include <uv_pars_vertex>
        #include <color_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #include <fog_vertex>
                vViewPosition = - mvPosition.xyz;
        }`,
  pl = `#define MATCAP
    uniform vec3 diffuse;
    uniform float opacity;
    uniform sampler2D matcap;
    varying vec3 vViewPosition;
    #include <common>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <fog_pars_fragment>
        #include <normal_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                vec3 viewDir = normalize( vViewPosition );
            vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
            vec3 y = cross( viewDir, x );
            vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
            #ifdef USE_MATCAP
            vec4 matcapColor = texture2D( matcap, uv );
            #else
                vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
            #endif
            vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  ml = `#define NORMAL
    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
    varying vec3 vViewPosition;
    #endif
    #include <common>
        #include <uv_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
            vViewPosition = - mvPosition.xyz;
            #endif
        }`,
  gl = `#define NORMAL
    uniform float opacity;
    #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
    varying vec3 vViewPosition;
    #endif
    #include <packing>
        #include <uv_pars_fragment>
        #include <normal_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                #include <logdepthbuf_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
            #ifdef OPAQUE
            gl_FragColor.a = 1.0;
            #endif
        }`,
  bl = `#define PHONG
    varying vec3 vViewPosition;
    #include <common>
        #include <uv_pars_vertex>
        #include <uv2_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <envmap_pars_vertex>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <shadowmap_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <uv2_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                vViewPosition = - mvPosition.xyz;
            #include <worldpos_vertex>
                #include <envmap_vertex>
                #include <shadowmap_vertex>
                #include <fog_vertex>
        }`,
  _l = `#define PHONG
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform vec3 specular;
    uniform float shininess;
    uniform float opacity;
    #include <common>
        #include <packing>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <uv2_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <aomap_pars_fragment>
        #include <lightmap_pars_fragment>
        #include <emissivemap_pars_fragment>
        #include <envmap_common_pars_fragment>
        #include <envmap_pars_fragment>
        #include <fog_pars_fragment>
        #include <bsdfs>
        #include <lights_pars_begin>
        #include <normal_pars_fragment>
        #include <lights_phong_pars_fragment>
        #include <shadowmap_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <specularmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            vec3 totalEmissiveRadiance = emissive;
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <specularmap_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                #include <emissivemap_fragment>
                #include <lights_phong_fragment>
                #include <lights_fragment_begin>
                #include <lights_fragment_maps>
                #include <lights_fragment_end>
                #include <aomap_fragment>
                vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
            #include <envmap_fragment>
                #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  xl = `#define STANDARD
    varying vec3 vViewPosition;
    #ifdef USE_TRANSMISSION
    varying vec3 vWorldPosition;
    #endif
    #include <common>
        #include <uv_pars_vertex>
        #include <uv2_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <shadowmap_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <uv2_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                vViewPosition = - mvPosition.xyz;
            #include <worldpos_vertex>
                #include <shadowmap_vertex>
                #include <fog_vertex>
                #ifdef USE_TRANSMISSION
            vWorldPosition = worldPosition.xyz;
            #endif
        }`,
  vl = `#define STANDARD
    #ifdef PHYSICAL
    #define IOR
    #define SPECULAR
    #endif
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform float roughness;
    uniform float metalness;
    uniform float opacity;
    #ifdef IOR
    uniform float ior;
    #endif
    #ifdef SPECULAR
    uniform float specularIntensity;
    uniform vec3 specularColor;
    #ifdef USE_SPECULARINTENSITYMAP
    uniform sampler2D specularIntensityMap;
    #endif
    #ifdef USE_SPECULARCOLORMAP
    uniform sampler2D specularColorMap;
    #endif
    #endif
    #ifdef USE_CLEARCOAT
    uniform float clearcoat;
    uniform float clearcoatRoughness;
    #endif
    #ifdef USE_IRIDESCENCE
    uniform float iridescence;
    uniform float iridescenceIOR;
    uniform float iridescenceThicknessMinimum;
    uniform float iridescenceThicknessMaximum;
    #endif
    #ifdef USE_SHEEN
    uniform vec3 sheenColor;
    uniform float sheenRoughness;
    #ifdef USE_SHEENCOLORMAP
    uniform sampler2D sheenColorMap;
    #endif
    #ifdef USE_SHEENROUGHNESSMAP
    uniform sampler2D sheenRoughnessMap;
    #endif
    #endif
    varying vec3 vViewPosition;
    #include <common>
        #include <packing>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <uv2_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <aomap_pars_fragment>
        #include <lightmap_pars_fragment>
        #include <emissivemap_pars_fragment>
        #include <bsdfs>
        #include <iridescence_fragment>
        #include <cube_uv_reflection_fragment>
        #include <envmap_common_pars_fragment>
        #include <envmap_physical_pars_fragment>
        #include <fog_pars_fragment>
        #include <lights_pars_begin>
        #include <normal_pars_fragment>
        #include <lights_physical_pars_fragment>
        #include <transmission_pars_fragment>
        #include <shadowmap_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <clearcoat_pars_fragment>
        #include <iridescence_pars_fragment>
        #include <roughnessmap_pars_fragment>
        #include <metalnessmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            vec3 totalEmissiveRadiance = emissive;
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <roughnessmap_fragment>
                #include <metalnessmap_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                #include <clearcoat_normal_fragment_begin>
                #include <clearcoat_normal_fragment_maps>
                #include <emissivemap_fragment>
                #include <lights_physical_fragment>
                #include <lights_fragment_begin>
                #include <lights_fragment_maps>
                #include <lights_fragment_end>
                #include <aomap_fragment>
                vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
            vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
            #include <transmission_fragment>
                vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
            #ifdef USE_SHEEN
            float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
            outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
            #endif
            #ifdef USE_CLEARCOAT
            float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
            vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
            outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
            #endif
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  Ml = `#define TOON
    varying vec3 vViewPosition;
    #include <common>
        #include <uv_pars_vertex>
        #include <uv2_pars_vertex>
        #include <displacementmap_pars_vertex>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <shadowmap_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                #include <uv2_vertex>
                #include <color_vertex>
                #include <morphcolor_vertex>
                #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <normal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <displacementmap_vertex>
                #include <project_vertex>
                #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                vViewPosition = - mvPosition.xyz;
            #include <worldpos_vertex>
                #include <shadowmap_vertex>
                #include <fog_vertex>
        }`,
  Sl = `#define TOON
    uniform vec3 diffuse;
    uniform vec3 emissive;
    uniform float opacity;
    #include <common>
        #include <packing>
        #include <dithering_pars_fragment>
        #include <color_pars_fragment>
        #include <uv_pars_fragment>
        #include <uv2_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <aomap_pars_fragment>
        #include <lightmap_pars_fragment>
        #include <emissivemap_pars_fragment>
        #include <gradientmap_pars_fragment>
        #include <fog_pars_fragment>
        #include <bsdfs>
        #include <lights_pars_begin>
        #include <normal_pars_fragment>
        #include <lights_toon_pars_fragment>
        #include <shadowmap_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec4 diffuseColor = vec4( diffuse, opacity );
            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
            vec3 totalEmissiveRadiance = emissive;
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <color_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                #include <normal_fragment_begin>
                #include <normal_fragment_maps>
                #include <emissivemap_fragment>
                #include <lights_toon_fragment>
                #include <lights_fragment_begin>
                #include <lights_fragment_maps>
                #include <lights_fragment_end>
                #include <aomap_fragment>
                vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
                #include <dithering_fragment>
        }`,
  yl = `uniform float size;
    uniform float scale;
    #include <common>
        #include <color_pars_vertex>
        #include <fog_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <color_vertex>
                #include <morphcolor_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <project_vertex>
                gl_PointSize = size;
            #ifdef USE_SIZEATTENUATION
            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
            #endif
            #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #include <worldpos_vertex>
                #include <fog_vertex>
        }`,
  wl = `uniform vec3 diffuse;
    uniform float opacity;
    #include <common>
        #include <color_pars_fragment>
        #include <map_particle_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <fog_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec3 outgoingLight = vec3( 0.0 );
            vec4 diffuseColor = vec4( diffuse, opacity );
            #include <logdepthbuf_fragment>
                #include <map_particle_fragment>
                #include <color_fragment>
                #include <alphatest_fragment>
                outgoingLight = diffuseColor.rgb;
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
                #include <premultiplied_alpha_fragment>
        }`,
  Tl = `#include <common>
        #include <fog_pars_vertex>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        #include <shadowmap_pars_vertex>
        void main() {
            #include <beginnormal_vertex>
                #include <morphnormal_vertex>
                #include <skinbase_vertex>
                #include <skinnormal_vertex>
                #include <defaultnormal_vertex>
                #include <begin_vertex>
                #include <morphtarget_vertex>
                #include <skinning_vertex>
                #include <project_vertex>
                #include <worldpos_vertex>
                #include <shadowmap_vertex>
                #include <fog_vertex>
        }`,
  El = `uniform vec3 color;
    uniform float opacity;
    #include <common>
        #include <packing>
        #include <fog_pars_fragment>
        #include <bsdfs>
        #include <lights_pars_begin>
        #include <shadowmap_pars_fragment>
        #include <shadowmask_pars_fragment>
        void main() {
            gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
            #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
        }`,
  Al = `uniform float rotation;
    uniform vec2 center;
    #include <common>
        #include <uv_pars_vertex>
        #include <fog_pars_vertex>
        #include <logdepthbuf_pars_vertex>
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <uv_vertex>
                vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
            #ifndef USE_SIZEATTENUATION
            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;
            #endif
            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;
            gl_Position = projectionMatrix * mvPosition;
            #include <logdepthbuf_vertex>
                #include <clipping_planes_vertex>
                #include <fog_vertex>
        }`,
  Cl = `uniform vec3 diffuse;
    uniform float opacity;
    #include <common>
        #include <uv_pars_fragment>
        #include <map_pars_fragment>
        #include <alphamap_pars_fragment>
        #include <alphatest_pars_fragment>
        #include <fog_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        void main() {
            #include <clipping_planes_fragment>
                vec3 outgoingLight = vec3( 0.0 );
            vec4 diffuseColor = vec4( diffuse, opacity );
            #include <logdepthbuf_fragment>
                #include <map_fragment>
                #include <alphamap_fragment>
                #include <alphatest_fragment>
                outgoingLight = diffuseColor.rgb;
            #include <output_fragment>
                #include <tonemapping_fragment>
                #include <encodings_fragment>
                #include <fog_fragment>
        }`,
  ye = {
    alphamap_fragment: Jo,
    alphamap_pars_fragment: Qo,
    alphatest_fragment: ec,
    alphatest_pars_fragment: tc,
    aomap_fragment: nc,
    aomap_pars_fragment: ic,
    begin_vertex: ac,
    beginnormal_vertex: rc,
    bsdfs: sc,
    iridescence_fragment: oc,
    bumpmap_pars_fragment: cc,
    clipping_planes_fragment: fc,
    clipping_planes_pars_fragment: lc,
    clipping_planes_pars_vertex: dc,
    clipping_planes_vertex: uc,
    color_fragment: hc,
    color_pars_fragment: pc,
    color_pars_vertex: mc,
    color_vertex: gc,
    common: bc,
    cube_uv_reflection_fragment: _c,
    defaultnormal_vertex: xc,
    displacementmap_pars_vertex: vc,
    displacementmap_vertex: Mc,
    emissivemap_fragment: Sc,
    emissivemap_pars_fragment: yc,
    encodings_fragment: wc,
    encodings_pars_fragment: Tc,
    envmap_fragment: Ec,
    envmap_common_pars_fragment: Ac,
    envmap_pars_fragment: Cc,
    envmap_pars_vertex: Lc,
    envmap_physical_pars_fragment: Vc,
    envmap_vertex: Dc,
    fog_vertex: Rc,
    fog_pars_vertex: Pc,
    fog_fragment: Ic,
    fog_pars_fragment: Fc,
    gradientmap_pars_fragment: Nc,
    lightmap_fragment: Uc,
    lightmap_pars_fragment: zc,
    lights_lambert_fragment: Oc,
    lights_lambert_pars_fragment: Bc,
    lights_pars_begin: Gc,
    lights_toon_fragment: kc,
    lights_toon_pars_fragment: Wc,
    lights_phong_fragment: Hc,
    lights_phong_pars_fragment: qc,
    lights_physical_fragment: Xc,
    lights_physical_pars_fragment: Yc,
    lights_fragment_begin: jc,
    lights_fragment_maps: Zc,
    lights_fragment_end: $c,
    logdepthbuf_fragment: Kc,
    logdepthbuf_pars_fragment: Jc,
    logdepthbuf_pars_vertex: Qc,
    logdepthbuf_vertex: ef,
    map_fragment: tf,
    map_pars_fragment: nf,
    map_particle_fragment: af,
    map_particle_pars_fragment: rf,
    metalnessmap_fragment: sf,
    metalnessmap_pars_fragment: of,
    morphcolor_vertex: cf,
    morphnormal_vertex: ff,
    morphtarget_pars_vertex: lf,
    morphtarget_vertex: df,
    normal_fragment_begin: uf,
    normal_fragment_maps: hf,
    normal_pars_fragment: pf,
    normal_pars_vertex: mf,
    normal_vertex: gf,
    normalmap_pars_fragment: bf,
    clearcoat_normal_fragment_begin: _f,
    clearcoat_normal_fragment_maps: xf,
    clearcoat_pars_fragment: vf,
    iridescence_pars_fragment: Mf,
    output_fragment: Sf,
    packing: yf,
    premultiplied_alpha_fragment: wf,
    project_vertex: Tf,
    dithering_fragment: Ef,
    dithering_pars_fragment: Af,
    roughnessmap_fragment: Cf,
    roughnessmap_pars_fragment: Lf,
    shadowmap_pars_fragment: Df,
    shadowmap_pars_vertex: Rf,
    shadowmap_vertex: Pf,
    shadowmask_pars_fragment: If,
    skinbase_vertex: Ff,
    skinning_pars_vertex: Nf,
    skinning_vertex: Uf,
    skinnormal_vertex: zf,
    specularmap_fragment: Of,
    specularmap_pars_fragment: Bf,
    tonemapping_fragment: Gf,
    tonemapping_pars_fragment: Vf,
    transmission_fragment: kf,
    transmission_pars_fragment: Wf,
    uv_pars_fragment: Hf,
    uv_pars_vertex: qf,
    uv_vertex: Xf,
    uv2_pars_fragment: Yf,
    uv2_pars_vertex: jf,
    uv2_vertex: Zf,
    worldpos_vertex: $f,
    background_vert: Kf,
    background_frag: Jf,
    cube_vert: Qf,
    cube_frag: el,
    depth_vert: tl,
    depth_frag: nl,
    distanceRGBA_vert: il,
    distanceRGBA_frag: al,
    equirect_vert: rl,
    equirect_frag: sl,
    linedashed_vert: ol,
    linedashed_frag: cl,
    meshbasic_vert: fl,
    meshbasic_frag: ll,
    meshlambert_vert: dl,
    meshlambert_frag: ul,
    meshmatcap_vert: hl,
    meshmatcap_frag: pl,
    meshnormal_vert: ml,
    meshnormal_frag: gl,
    meshphong_vert: bl,
    meshphong_frag: _l,
    meshphysical_vert: xl,
    meshphysical_frag: vl,
    meshtoon_vert: Ml,
    meshtoon_frag: Sl,
    points_vert: yl,
    points_frag: wl,
    shadow_vert: Tl,
    shadow_frag: El,
    sprite_vert: Al,
    sprite_frag: Cl,
  },
  ee = {
    common: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new pt() },
      uv2Transform: { value: new pt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Fe(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ie(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new pt() },
    },
    sprite: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      center: { value: new Fe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new pt() },
    },
  },
  Et = {
    basic: {
      uniforms: $e([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.fog,
      ]),
      vertexShader: ye.meshbasic_vert,
      fragmentShader: ye.meshbasic_frag,
    },
    lambert: {
      uniforms: $e([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.fog,
        ee.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: ye.meshlambert_vert,
      fragmentShader: ye.meshlambert_frag,
    },
    phong: {
      uniforms: $e([
        ee.common,
        ee.specularmap,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.fog,
        ee.lights,
        {
          emissive: { value: new Ie(0) },
          specular: { value: new Ie(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ye.meshphong_vert,
      fragmentShader: ye.meshphong_frag,
    },
    standard: {
      uniforms: $e([
        ee.common,
        ee.envmap,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.roughnessmap,
        ee.metalnessmap,
        ee.fog,
        ee.lights,
        {
          emissive: { value: new Ie(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ye.meshphysical_vert,
      fragmentShader: ye.meshphysical_frag,
    },
    toon: {
      uniforms: $e([
        ee.common,
        ee.aomap,
        ee.lightmap,
        ee.emissivemap,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.gradientmap,
        ee.fog,
        ee.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: ye.meshtoon_vert,
      fragmentShader: ye.meshtoon_frag,
    },
    matcap: {
      uniforms: $e([
        ee.common,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        ee.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ye.meshmatcap_vert,
      fragmentShader: ye.meshmatcap_frag,
    },
    points: {
      uniforms: $e([ee.points, ee.fog]),
      vertexShader: ye.points_vert,
      fragmentShader: ye.points_frag,
    },
    dashed: {
      uniforms: $e([
        ee.common,
        ee.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ye.linedashed_vert,
      fragmentShader: ye.linedashed_frag,
    },
    depth: {
      uniforms: $e([ee.common, ee.displacementmap]),
      vertexShader: ye.depth_vert,
      fragmentShader: ye.depth_frag,
    },
    normal: {
      uniforms: $e([
        ee.common,
        ee.bumpmap,
        ee.normalmap,
        ee.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ye.meshnormal_vert,
      fragmentShader: ye.meshnormal_frag,
    },
    sprite: {
      uniforms: $e([ee.sprite, ee.fog]),
      vertexShader: ye.sprite_vert,
      fragmentShader: ye.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new pt() }, t2D: { value: null } },
      vertexShader: ye.background_vert,
      fragmentShader: ye.background_frag,
    },
    cube: {
      uniforms: $e([ee.envmap, { opacity: { value: 1 } }]),
      vertexShader: ye.cube_vert,
      fragmentShader: ye.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ye.equirect_vert,
      fragmentShader: ye.equirect_frag,
    },
    distanceRGBA: {
      uniforms: $e([
        ee.common,
        ee.displacementmap,
        {
          referencePosition: { value: new D() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ye.distanceRGBA_vert,
      fragmentShader: ye.distanceRGBA_frag,
    },
    shadow: {
      uniforms: $e([
        ee.lights,
        ee.fog,
        { color: { value: new Ie(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ye.shadow_vert,
      fragmentShader: ye.shadow_frag,
    },
  };
Et.physical = {
  uniforms: $e([
    Et.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Fe(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Ie(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Fe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ie(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Ie(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: ye.meshphysical_vert,
  fragmentShader: ye.meshphysical_frag,
};
function Ll(r, e, t, n, i, a) {
  const o = new Ie(0);
  let s = i === !0 ? 0 : 1,
    f,
    c,
    d = null,
    u = 0,
    h = null;
  function m(p, l) {
    let _ = !1,
      M = l.isScene === !0 ? l.background : null;
    M && M.isTexture && (M = e.get(M));
    const T = r.xr,
      w = T.getSession && T.getSession();
    w && w.environmentBlendMode === "additive" && (M = null),
      M === null ? b(o, s) : M && M.isColor && (b(M, 1), (_ = !0)),
      (r.autoClear || _) &&
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === Pi)
        ? (c === void 0 &&
            ((c = new Bt(
              new ai(1, 1, 1),
              new Jt({
                name: "BackgroundCubeMaterial",
                uniforms: kn(Et.cube.uniforms),
                vertexShader: Et.cube.vertexShader,
                fragmentShader: Et.cube.fragmentShader,
                side: mt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (y, A, N) {
              this.matrixWorld.copyPosition(N.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.envMap.value = M),
          (c.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (d !== M || u !== M.version || h !== r.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = M),
            (u = M.version),
            (h = r.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (f === void 0 &&
            ((f = new Bt(
              new Ni(2, 2),
              new Jt({
                name: "BackgroundMaterial",
                uniforms: kn(Et.background.uniforms),
                vertexShader: Et.background.vertexShader,
                fragmentShader: Et.background.fragmentShader,
                side: On,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            f.geometry.deleteAttribute("normal"),
            Object.defineProperty(f.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(f)),
          (f.material.uniforms.t2D.value = M),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          f.material.uniforms.uvTransform.value.copy(M.matrix),
          (d !== M || u !== M.version || h !== r.toneMapping) &&
            ((f.material.needsUpdate = !0),
            (d = M),
            (u = M.version),
            (h = r.toneMapping)),
          f.layers.enableAll(),
          p.unshift(f, f.geometry, f.material, 0, 0, null));
  }
  function b(p, l) {
    t.buffers.color.setClear(p.r, p.g, p.b, l, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, l = 1) {
      o.set(p), (s = l), b(o, s);
    },
    getClearAlpha: function () {
      return s;
    },
    setClearAlpha: function (p) {
      (s = p), b(o, s);
    },
    render: m,
  };
}
function Dl(r, e, t, n) {
  const i = r.getParameter(34921),
    a = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || a !== null,
    s = {},
    f = l(null);
  let c = f,
    d = !1;
  function u(I, q, Y, j, W) {
    let P = !1;
    if (o) {
      const U = p(j, Y, q);
      c !== U && ((c = U), m(c.object)),
        (P = _(I, j, Y, W)),
        P && M(I, j, Y, W);
    } else {
      const U = q.wireframe === !0;
      (c.geometry !== j.id || c.program !== Y.id || c.wireframe !== U) &&
        ((c.geometry = j.id), (c.program = Y.id), (c.wireframe = U), (P = !0));
    }
    W !== null && t.update(W, 34963),
      (P || d) &&
        ((d = !1),
        x(I, q, Y, j),
        W !== null && r.bindBuffer(34963, t.get(W).buffer));
  }
  function h() {
    return n.isWebGL2 ? r.createVertexArray() : a.createVertexArrayOES();
  }
  function m(I) {
    return n.isWebGL2 ? r.bindVertexArray(I) : a.bindVertexArrayOES(I);
  }
  function b(I) {
    return n.isWebGL2 ? r.deleteVertexArray(I) : a.deleteVertexArrayOES(I);
  }
  function p(I, q, Y) {
    const j = Y.wireframe === !0;
    let W = s[I.id];
    W === void 0 && ((W = {}), (s[I.id] = W));
    let P = W[q.id];
    P === void 0 && ((P = {}), (W[q.id] = P));
    let U = P[j];
    return U === void 0 && ((U = l(h())), (P[j] = U)), U;
  }
  function l(I) {
    const q = [],
      Y = [],
      j = [];
    for (let W = 0; W < i; W++) (q[W] = 0), (Y[W] = 0), (j[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: q,
      enabledAttributes: Y,
      attributeDivisors: j,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function _(I, q, Y, j) {
    const W = c.attributes,
      P = q.attributes;
    let U = 0;
    const J = Y.getAttributes();
    for (const $ in J)
      if (J[$].location >= 0) {
        const fe = W[$];
        let ge = P[$];
        if (
          (ge === void 0 &&
            ($ === "instanceMatrix" &&
              I.instanceMatrix &&
              (ge = I.instanceMatrix),
            $ === "instanceColor" && I.instanceColor && (ge = I.instanceColor)),
          fe === void 0 || fe.attribute !== ge || (ge && fe.data !== ge.data))
        )
          return !0;
        U++;
      }
    return c.attributesNum !== U || c.index !== j;
  }
  function M(I, q, Y, j) {
    const W = {},
      P = q.attributes;
    let U = 0;
    const J = Y.getAttributes();
    for (const $ in J)
      if (J[$].location >= 0) {
        let fe = P[$];
        fe === void 0 &&
          ($ === "instanceMatrix" &&
            I.instanceMatrix &&
            (fe = I.instanceMatrix),
          $ === "instanceColor" && I.instanceColor && (fe = I.instanceColor));
        const ge = {};
        (ge.attribute = fe),
          fe && fe.data && (ge.data = fe.data),
          (W[$] = ge),
          U++;
      }
    (c.attributes = W), (c.attributesNum = U), (c.index = j);
  }
  function T() {
    const I = c.newAttributes;
    for (let q = 0, Y = I.length; q < Y; q++) I[q] = 0;
  }
  function w(I) {
    y(I, 0);
  }
  function y(I, q) {
    const Y = c.newAttributes,
      j = c.enabledAttributes,
      W = c.attributeDivisors;
    (Y[I] = 1),
      j[I] === 0 && (r.enableVertexAttribArray(I), (j[I] = 1)),
      W[I] !== q &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](I, q),
        (W[I] = q));
  }
  function A() {
    const I = c.newAttributes,
      q = c.enabledAttributes;
    for (let Y = 0, j = q.length; Y < j; Y++)
      q[Y] !== I[Y] && (r.disableVertexAttribArray(Y), (q[Y] = 0));
  }
  function N(I, q, Y, j, W, P) {
    n.isWebGL2 === !0 && (Y === 5124 || Y === 5125)
      ? r.vertexAttribIPointer(I, q, Y, W, P)
      : r.vertexAttribPointer(I, q, Y, j, W, P);
  }
  function x(I, q, Y, j) {
    if (
      n.isWebGL2 === !1 &&
      (I.isInstancedMesh || j.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    T();
    const W = j.attributes,
      P = Y.getAttributes(),
      U = q.defaultAttributeValues;
    for (const J in P) {
      const $ = P[J];
      if ($.location >= 0) {
        let Z = W[J];
        if (
          (Z === void 0 &&
            (J === "instanceMatrix" &&
              I.instanceMatrix &&
              (Z = I.instanceMatrix),
            J === "instanceColor" && I.instanceColor && (Z = I.instanceColor)),
          Z !== void 0)
        ) {
          const fe = Z.normalized,
            ge = Z.itemSize,
            H = t.get(Z);
          if (H === void 0) continue;
          const De = H.buffer,
            pe = H.type,
            be = H.bytesPerElement;
          if (Z.isInterleavedBufferAttribute) {
            const oe = Z.data,
              Pe = oe.stride,
              Se = Z.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let he = 0; he < $.locationSize; he++)
                y($.location + he, oe.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                j._maxInstanceCount === void 0 &&
                (j._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let he = 0; he < $.locationSize; he++) w($.location + he);
            r.bindBuffer(34962, De);
            for (let he = 0; he < $.locationSize; he++)
              N(
                $.location + he,
                ge / $.locationSize,
                pe,
                fe,
                Pe * be,
                (Se + (ge / $.locationSize) * he) * be
              );
          } else {
            if (Z.isInstancedBufferAttribute) {
              for (let oe = 0; oe < $.locationSize; oe++)
                y($.location + oe, Z.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                j._maxInstanceCount === void 0 &&
                (j._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let oe = 0; oe < $.locationSize; oe++) w($.location + oe);
            r.bindBuffer(34962, De);
            for (let oe = 0; oe < $.locationSize; oe++)
              N(
                $.location + oe,
                ge / $.locationSize,
                pe,
                fe,
                ge * be,
                (ge / $.locationSize) * oe * be
              );
          }
        } else if (U !== void 0) {
          const fe = U[J];
          if (fe !== void 0)
            switch (fe.length) {
              case 2:
                r.vertexAttrib2fv($.location, fe);
                break;
              case 3:
                r.vertexAttrib3fv($.location, fe);
                break;
              case 4:
                r.vertexAttrib4fv($.location, fe);
                break;
              default:
                r.vertexAttrib1fv($.location, fe);
            }
        }
      }
    }
    A();
  }
  function E() {
    re();
    for (const I in s) {
      const q = s[I];
      for (const Y in q) {
        const j = q[Y];
        for (const W in j) b(j[W].object), delete j[W];
        delete q[Y];
      }
      delete s[I];
    }
  }
  function F(I) {
    if (s[I.id] === void 0) return;
    const q = s[I.id];
    for (const Y in q) {
      const j = q[Y];
      for (const W in j) b(j[W].object), delete j[W];
      delete q[Y];
    }
    delete s[I.id];
  }
  function X(I) {
    for (const q in s) {
      const Y = s[q];
      if (Y[I.id] === void 0) continue;
      const j = Y[I.id];
      for (const W in j) b(j[W].object), delete j[W];
      delete Y[I.id];
    }
  }
  function re() {
    O(), (d = !0), c !== f && ((c = f), m(c.object));
  }
  function O() {
    (f.geometry = null), (f.program = null), (f.wireframe = !1);
  }
  return {
    setup: u,
    reset: re,
    resetDefaultState: O,
    dispose: E,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: X,
    initAttributes: T,
    enableAttribute: w,
    disableUnusedAttributes: A,
  };
}
function Rl(r, e, t, n) {
  const i = n.isWebGL2;
  let a;
  function o(c) {
    a = c;
  }
  function s(c, d) {
    r.drawArrays(a, c, d), t.update(d, a, 1);
  }
  function f(c, d, u) {
    if (u === 0) return;
    let h, m;
    if (i) (h = r), (m = "drawArraysInstanced");
    else if (
      ((h = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      h === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    h[m](a, c, d, u), t.update(d, a, u);
  }
  (this.setMode = o), (this.render = s), (this.renderInstances = f);
}
function Pl(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const N = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function a(N) {
    if (N === "highp") {
      if (
        r.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        r.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      N = "mediump";
    }
    return N === "mediump" &&
      r.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      r.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    (typeof WebGL2RenderingContext < "u" &&
      r instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < "u" &&
      r instanceof WebGL2ComputeRenderingContext);
  let s = t.precision !== void 0 ? t.precision : "highp";
  const f = a(s);
  f !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      f,
      "instead."
    ),
    (s = f));
  const c = o || e.has("WEBGL_draw_buffers"),
    d = t.logarithmicDepthBuffer === !0,
    u = r.getParameter(34930),
    h = r.getParameter(35660),
    m = r.getParameter(3379),
    b = r.getParameter(34076),
    p = r.getParameter(34921),
    l = r.getParameter(36347),
    _ = r.getParameter(36348),
    M = r.getParameter(36349),
    T = h > 0,
    w = o || e.has("OES_texture_float"),
    y = T && w,
    A = o ? r.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: a,
    precision: s,
    logarithmicDepthBuffer: d,
    maxTextures: u,
    maxVertexTextures: h,
    maxTextureSize: m,
    maxCubemapSize: b,
    maxAttributes: p,
    maxVertexUniforms: l,
    maxVaryings: _,
    maxFragmentUniforms: M,
    vertexTextures: T,
    floatFragmentTextures: w,
    floatVertexTextures: y,
    maxSamples: A,
  };
}
function Il(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    a = !1;
  const o = new sn(),
    s = new pt(),
    f = { value: null, needsUpdate: !1 };
  (this.uniform = f),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, h, m) {
      const b = u.length !== 0 || h || n !== 0 || i;
      return (i = h), (t = d(u, m, 0)), (n = u.length), b;
    }),
    (this.beginShadows = function () {
      (a = !0), d(null);
    }),
    (this.endShadows = function () {
      (a = !1), c();
    }),
    (this.setState = function (u, h, m) {
      const b = u.clippingPlanes,
        p = u.clipIntersection,
        l = u.clipShadows,
        _ = r.get(u);
      if (!i || b === null || b.length === 0 || (a && !l)) a ? d(null) : c();
      else {
        const M = a ? 0 : n,
          T = M * 4;
        let w = _.clippingState || null;
        (f.value = w), (w = d(b, h, T, m));
        for (let y = 0; y !== T; ++y) w[y] = t[y];
        (_.clippingState = w),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += M);
      }
    });
  function c() {
    f.value !== t && ((f.value = t), (f.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function d(u, h, m, b) {
    const p = u !== null ? u.length : 0;
    let l = null;
    if (p !== 0) {
      if (((l = f.value), b !== !0 || l === null)) {
        const _ = m + p * 4,
          M = h.matrixWorldInverse;
        s.getNormalMatrix(M),
          (l === null || l.length < _) && (l = new Float32Array(_));
        for (let T = 0, w = m; T !== p; ++T, w += 4)
          o.copy(u[T]).applyMatrix4(M, s),
            o.normal.toArray(l, w),
            (l[w + 3] = o.constant);
      }
      (f.value = l), (f.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), l;
  }
}
function Fl(r) {
  let e = new WeakMap();
  function t(o, s) {
    return s === Sa ? (o.mapping = Bn) : s === ya && (o.mapping = Gn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const s = o.mapping;
      if (s === Sa || s === ya)
        if (e.has(o)) {
          const f = e.get(o).texture;
          return t(f, o.mapping);
        } else {
          const f = o.image;
          if (f && f.height > 0) {
            const c = new jo(f.height / 2);
            return (
              c.fromEquirectangularTexture(r, o),
              e.set(o, c),
              o.addEventListener("dispose", i),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const s = o.target;
    s.removeEventListener("dispose", i);
    const f = e.get(s);
    f !== void 0 && (e.delete(s), f.dispose());
  }
  function a() {
    e = new WeakMap();
  }
  return { get: n, dispose: a };
}
class Nl extends ps {
  constructor(e = -1, t = 1, n = 1, i = -1, a = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = a),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, a, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = a),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let a = n - e,
      o = n + e,
      s = i + t,
      f = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a += c * this.view.offsetX),
        (o = a + c * this.view.width),
        (s -= d * this.view.offsetY),
        (f = s - d * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(a, o, s, f, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Nn = 4,
  wr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  cn = 20,
  ma = new Nl(),
  Tr = new Ie();
let ga = null;
const on = (1 + Math.sqrt(5)) / 2,
  In = 1 / on,
  Er = [
    new D(1, 1, 1),
    new D(-1, 1, 1),
    new D(1, 1, -1),
    new D(-1, 1, -1),
    new D(0, on, In),
    new D(0, on, -In),
    new D(In, 0, on),
    new D(-In, 0, on),
    new D(on, In, 0),
    new D(-on, In, 0),
  ];
class Ar {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (ga = this._renderer.getRenderTarget()), this._setSize(256);
    const a = this._allocateTargets();
    return (
      (a.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, a),
      t > 0 && this._blur(a, 0, 0, t),
      this._applyPMREM(a),
      this._cleanup(a),
      a
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Dr()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Lr()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ga),
      (e.scissorTest = !1),
      Ei(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Bn || e.mapping === Gn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (ga = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: ut,
        minFilter: ut,
        generateMipmaps: !1,
        type: Kn,
        format: At,
        encoding: mn,
        depthBuffer: !1,
      },
      i = Cr(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Cr(e, t, n));
      const { _lodMax: a } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Ul(a)),
        (this._blurMaterial = zl(a, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, ma);
  }
  _sceneToCubeUV(e, t, n, i) {
    const s = new ht(90, 1, t, n),
      f = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      u = d.autoClear,
      h = d.toneMapping;
    d.getClearColor(Tr), (d.toneMapping = Gt), (d.autoClear = !1);
    const m = new ds({
        name: "PMREM.Background",
        side: mt,
        depthWrite: !1,
        depthTest: !1,
      }),
      b = new Bt(new ai(), m);
    let p = !1;
    const l = e.background;
    l
      ? l.isColor && (m.color.copy(l), (e.background = null), (p = !0))
      : (m.color.copy(Tr), (p = !0));
    for (let _ = 0; _ < 6; _++) {
      const M = _ % 3;
      M === 0
        ? (s.up.set(0, f[_], 0), s.lookAt(c[_], 0, 0))
        : M === 1
        ? (s.up.set(0, 0, f[_]), s.lookAt(0, c[_], 0))
        : (s.up.set(0, f[_], 0), s.lookAt(0, 0, c[_]));
      const T = this._cubeSize;
      Ei(i, M * T, _ > 2 ? T : 0, T, T),
        d.setRenderTarget(i),
        p && d.render(b, s),
        d.render(e, s);
    }
    b.geometry.dispose(),
      b.material.dispose(),
      (d.toneMapping = h),
      (d.autoClear = u),
      (e.background = l);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Bn || e.mapping === Gn;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Dr()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Lr());
    const a = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new Bt(this._lodPlanes[0], a),
      s = a.uniforms;
    s.envMap.value = e;
    const f = this._cubeSize;
    Ei(t, 0, 0, 3 * f, 2 * f), n.setRenderTarget(t), n.render(o, ma);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const a = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = Er[(i - 1) % Er.length];
      this._blur(e, i - 1, i, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, a) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", a),
      this._halfBlur(o, e, n, n, i, "longitudinal", a);
  }
  _halfBlur(e, t, n, i, a, o, s) {
    const f = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const d = 3,
      u = new Bt(this._lodPlanes[i], c),
      h = c.uniforms,
      m = this._sizeLods[n] - 1,
      b = isFinite(a) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * cn - 1),
      p = a / b,
      l = isFinite(a) ? 1 + Math.floor(d * p) : cn;
    l > cn &&
      console.warn(
        `sigmaRadians, ${a}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${cn}`
      );
    const _ = [];
    let M = 0;
    for (let N = 0; N < cn; ++N) {
      const x = N / p,
        E = Math.exp((-x * x) / 2);
      _.push(E), N === 0 ? (M += E) : N < l && (M += 2 * E);
    }
    for (let N = 0; N < _.length; N++) _[N] = _[N] / M;
    (h.envMap.value = e.texture),
      (h.samples.value = l),
      (h.weights.value = _),
      (h.latitudinal.value = o === "latitudinal"),
      s && (h.poleAxis.value = s);
    const { _lodMax: T } = this;
    (h.dTheta.value = b), (h.mipInt.value = T - n);
    const w = this._sizeLods[i],
      y = 3 * w * (i > T - Nn ? i - T + Nn : 0),
      A = 4 * (this._cubeSize - w);
    Ei(t, y, A, 3 * w, 2 * w), f.setRenderTarget(t), f.render(u, ma);
  }
}
function Ul(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const a = r - Nn + 1 + wr.length;
  for (let o = 0; o < a; o++) {
    const s = Math.pow(2, i);
    t.push(s);
    let f = 1 / s;
    o > r - Nn ? (f = wr[o - r + Nn - 1]) : o === 0 && (f = 0), n.push(f);
    const c = 1 / (s - 2),
      d = -c,
      u = 1 + c,
      h = [d, d, u, d, u, u, d, d, u, u, d, u],
      m = 6,
      b = 6,
      p = 3,
      l = 2,
      _ = 1,
      M = new Float32Array(p * b * m),
      T = new Float32Array(l * b * m),
      w = new Float32Array(_ * b * m);
    for (let A = 0; A < m; A++) {
      const N = ((A % 3) * 2) / 3 - 1,
        x = A > 2 ? 0 : -1,
        E = [
          N,
          x,
          0,
          N + 2 / 3,
          x,
          0,
          N + 2 / 3,
          x + 1,
          0,
          N,
          x,
          0,
          N + 2 / 3,
          x + 1,
          0,
          N,
          x + 1,
          0,
        ];
      M.set(E, p * b * A), T.set(h, l * b * A);
      const F = [A, A, A, A, A, A];
      w.set(F, _ * b * A);
    }
    const y = new Vt();
    y.setAttribute("position", new Ct(M, p)),
      y.setAttribute("uv", new Ct(T, l)),
      y.setAttribute("faceIndex", new Ct(w, _)),
      e.push(y),
      i > Nn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Cr(r, e, t) {
  const n = new gn(r, e, t);
  return (
    (n.texture.mapping = Pi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Ei(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function zl(r, e, t) {
  const n = new Float32Array(cn),
    i = new D(0, 1, 0);
  return new Jt({
    name: "SphericalGaussianBlur",
    defines: {
      n: cn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Ra(),
    fragmentShader: `

precision mediump float;
precision mediump int;

varying vec3 vOutputDirection;

uniform sampler2D envMap;
uniform int samples;
uniform float weights[ n ];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

    vec3 getSample( float theta, vec3 axis ) {

        float cosTheta = cos( theta );
        // Rodrigues' axis-angle rotation
        vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

        return bilinearCubeUV( envMap, sampleDirection, mipInt );

    }

void main() {

    vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

    if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

        axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

    }

    axis = normalize( axis );

    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

    for ( int i = 1; i < n; i++ ) {

        if ( i >= samples ) {

            break;

        }

        float theta = dTheta * float( i );
        gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
        gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

    }

}
`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Lr() {
  return new Jt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Ra(),
    fragmentShader: `

precision mediump float;
precision mediump int;

varying vec3 vOutputDirection;

uniform sampler2D envMap;

#include <common>

    void main() {

        vec3 outputDirection = normalize( vOutputDirection );
        vec2 uv = equirectUv( outputDirection );

        gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

    }
`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Dr() {
  return new Jt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ra(),
    fragmentShader: `

precision mediump float;
precision mediump int;

uniform float flipEnvMap;

varying vec3 vOutputDirection;

uniform samplerCube envMap;

void main() {

    gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

}
`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ra() {
  return `

precision mediump float;
precision mediump int;

attribute float faceIndex;

varying vec3 vOutputDirection;

// RH coordinate system; PMREM face-indexing convention
vec3 getDirection( vec2 uv, float face ) {

    uv = 2.0 * uv - 1.0;

    vec3 direction = vec3( uv, 1.0 );

    if ( face == 0.0 ) {

        direction = direction.zyx; // ( 1, v, u ) pos x

    } else if ( face == 1.0 ) {

        direction = direction.xzy;
        direction.xz *= -1.0; // ( -u, 1, -v ) pos y

    } else if ( face == 2.0 ) {

        direction.x *= -1.0; // ( -u, v, 1 ) pos z

    } else if ( face == 3.0 ) {

        direction = direction.zyx;
        direction.xz *= -1.0; // ( -1, v, -u ) neg x

    } else if ( face == 4.0 ) {

        direction = direction.xzy;
        direction.xy *= -1.0; // ( -u, -1, v ) neg y

    } else if ( face == 5.0 ) {

        direction.z *= -1.0; // ( u, v, -1 ) neg z

    }

    return direction;

}

void main() {

    vOutputDirection = getDirection( uv, faceIndex );
    gl_Position = vec4( position, 1.0 );

}
`;
}
function Ol(r) {
  let e = new WeakMap(),
    t = null;
  function n(s) {
    if (s && s.isTexture) {
      const f = s.mapping,
        c = f === Sa || f === ya,
        d = f === Bn || f === Gn;
      if (c || d)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let u = e.get(s);
          return (
            t === null && (t = new Ar(r)),
            (u = c ? t.fromEquirectangular(s, u) : t.fromCubemap(s, u)),
            e.set(s, u),
            u.texture
          );
        } else {
          if (e.has(s)) return e.get(s).texture;
          {
            const u = s.image;
            if ((c && u && u.height > 0) || (d && u && i(u))) {
              t === null && (t = new Ar(r));
              const h = c ? t.fromEquirectangular(s) : t.fromCubemap(s);
              return e.set(s, h), s.addEventListener("dispose", a), h.texture;
            } else return null;
          }
        }
    }
    return s;
  }
  function i(s) {
    let f = 0;
    const c = 6;
    for (let d = 0; d < c; d++) s[d] !== void 0 && f++;
    return f === c;
  }
  function a(s) {
    const f = s.target;
    f.removeEventListener("dispose", a);
    const c = e.get(f);
    c !== void 0 && (e.delete(f), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Bl(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Gl(r, e, t, n) {
  const i = {},
    a = new WeakMap();
  function o(u) {
    const h = u.target;
    h.index !== null && e.remove(h.index);
    for (const b in h.attributes) e.remove(h.attributes[b]);
    h.removeEventListener("dispose", o), delete i[h.id];
    const m = a.get(h);
    m && (e.remove(m), a.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function s(u, h) {
    return (
      i[h.id] === !0 ||
        (h.addEventListener("dispose", o),
        (i[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function f(u) {
    const h = u.attributes;
    for (const b in h) e.update(h[b], 34962);
    const m = u.morphAttributes;
    for (const b in m) {
      const p = m[b];
      for (let l = 0, _ = p.length; l < _; l++) e.update(p[l], 34962);
    }
  }
  function c(u) {
    const h = [],
      m = u.index,
      b = u.attributes.position;
    let p = 0;
    if (m !== null) {
      const M = m.array;
      p = m.version;
      for (let T = 0, w = M.length; T < w; T += 3) {
        const y = M[T + 0],
          A = M[T + 1],
          N = M[T + 2];
        h.push(y, A, A, N, N, y);
      }
    } else {
      const M = b.array;
      p = b.version;
      for (let T = 0, w = M.length / 3 - 1; T < w; T += 3) {
        const y = T + 0,
          A = T + 1,
          N = T + 2;
        h.push(y, A, A, N, N, y);
      }
    }
    const l = new (as(h) ? hs : us)(h, 1);
    l.version = p;
    const _ = a.get(u);
    _ && e.remove(_), a.set(u, l);
  }
  function d(u) {
    const h = a.get(u);
    if (h) {
      const m = u.index;
      m !== null && h.version < m.version && c(u);
    } else c(u);
    return a.get(u);
  }
  return { get: s, update: f, getWireframeAttribute: d };
}
function Vl(r, e, t, n) {
  const i = n.isWebGL2;
  let a;
  function o(h) {
    a = h;
  }
  let s, f;
  function c(h) {
    (s = h.type), (f = h.bytesPerElement);
  }
  function d(h, m) {
    r.drawElements(a, m, s, h * f), t.update(m, a, 1);
  }
  function u(h, m, b) {
    if (b === 0) return;
    let p, l;
    if (i) (p = r), (l = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (l = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[l](a, m, s, h * f, b), t.update(m, a, b);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = d),
    (this.renderInstances = u);
}
function kl(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(a, o, s) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += s * (a / 3);
        break;
      case 1:
        t.lines += s * (a / 2);
        break;
      case 3:
        t.lines += s * (a - 1);
        break;
      case 2:
        t.lines += s * a;
        break;
      case 0:
        t.points += s * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Wl(r, e) {
  return r[0] - e[0];
}
function Hl(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function ql(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    a = new WeakMap(),
    o = new je(),
    s = [];
  for (let c = 0; c < 8; c++) s[c] = [c, 0];
  function f(c, d, u, h) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p =
          d.morphAttributes.position ||
          d.morphAttributes.normal ||
          d.morphAttributes.color,
        l = p !== void 0 ? p.length : 0;
      let _ = a.get(d);
      if (_ === void 0 || _.count !== l) {
        let Y = function () {
          I.dispose(), a.delete(d), d.removeEventListener("dispose", Y);
        };
        var b = Y;
        _ !== void 0 && _.texture.dispose();
        const w = d.morphAttributes.position !== void 0,
          y = d.morphAttributes.normal !== void 0,
          A = d.morphAttributes.color !== void 0,
          N = d.morphAttributes.position || [],
          x = d.morphAttributes.normal || [],
          E = d.morphAttributes.color || [];
        let F = 0;
        w === !0 && (F = 1), y === !0 && (F = 2), A === !0 && (F = 3);
        let X = d.attributes.position.count * F,
          re = 1;
        X > e.maxTextureSize &&
          ((re = Math.ceil(X / e.maxTextureSize)), (X = e.maxTextureSize));
        const O = new Float32Array(X * re * 4 * l),
          I = new cs(O, X, re, l);
        (I.type = ln), (I.needsUpdate = !0);
        const q = F * 4;
        for (let j = 0; j < l; j++) {
          const W = N[j],
            P = x[j],
            U = E[j],
            J = X * re * 4 * j;
          for (let $ = 0; $ < W.count; $++) {
            const Z = $ * q;
            w === !0 &&
              (o.fromBufferAttribute(W, $),
              (O[J + Z + 0] = o.x),
              (O[J + Z + 1] = o.y),
              (O[J + Z + 2] = o.z),
              (O[J + Z + 3] = 0)),
              y === !0 &&
                (o.fromBufferAttribute(P, $),
                (O[J + Z + 4] = o.x),
                (O[J + Z + 5] = o.y),
                (O[J + Z + 6] = o.z),
                (O[J + Z + 7] = 0)),
              A === !0 &&
                (o.fromBufferAttribute(U, $),
                (O[J + Z + 8] = o.x),
                (O[J + Z + 9] = o.y),
                (O[J + Z + 10] = o.z),
                (O[J + Z + 11] = U.itemSize === 4 ? o.w : 1));
          }
        }
        (_ = { count: l, texture: I, size: new Fe(X, re) }),
          a.set(d, _),
          d.addEventListener("dispose", Y);
      }
      let M = 0;
      for (let w = 0; w < m.length; w++) M += m[w];
      const T = d.morphTargetsRelative ? 1 : 1 - M;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", T),
        h.getUniforms().setValue(r, "morphTargetInfluences", m),
        h.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t),
        h.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const p = m === void 0 ? 0 : m.length;
      let l = n[d.id];
      if (l === void 0 || l.length !== p) {
        l = [];
        for (let y = 0; y < p; y++) l[y] = [y, 0];
        n[d.id] = l;
      }
      for (let y = 0; y < p; y++) {
        const A = l[y];
        (A[0] = y), (A[1] = m[y]);
      }
      l.sort(Hl);
      for (let y = 0; y < 8; y++)
        y < p && l[y][1]
          ? ((s[y][0] = l[y][0]), (s[y][1] = l[y][1]))
          : ((s[y][0] = Number.MAX_SAFE_INTEGER), (s[y][1] = 0));
      s.sort(Wl);
      const _ = d.morphAttributes.position,
        M = d.morphAttributes.normal;
      let T = 0;
      for (let y = 0; y < 8; y++) {
        const A = s[y],
          N = A[0],
          x = A[1];
        N !== Number.MAX_SAFE_INTEGER && x
          ? (_ &&
              d.getAttribute("morphTarget" + y) !== _[N] &&
              d.setAttribute("morphTarget" + y, _[N]),
            M &&
              d.getAttribute("morphNormal" + y) !== M[N] &&
              d.setAttribute("morphNormal" + y, M[N]),
            (i[y] = x),
            (T += x))
          : (_ &&
              d.hasAttribute("morphTarget" + y) === !0 &&
              d.deleteAttribute("morphTarget" + y),
            M &&
              d.hasAttribute("morphNormal" + y) === !0 &&
              d.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const w = d.morphTargetsRelative ? 1 : 1 - T;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", w),
        h.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: f };
}
function Xl(r, e, t, n) {
  let i = new WeakMap();
  function a(f) {
    const c = n.render.frame,
      d = f.geometry,
      u = e.get(f, d);
    return (
      i.get(u) !== c && (e.update(u), i.set(u, c)),
      f.isInstancedMesh &&
        (f.hasEventListener("dispose", s) === !1 &&
          f.addEventListener("dispose", s),
        t.update(f.instanceMatrix, 34962),
        f.instanceColor !== null && t.update(f.instanceColor, 34962)),
      u
    );
  }
  function o() {
    i = new WeakMap();
  }
  function s(f) {
    const c = f.target;
    c.removeEventListener("dispose", s),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: a, dispose: o };
}
const _s = new St(),
  xs = new cs(),
  vs = new Po(),
  Ms = new ms(),
  Rr = [],
  Pr = [],
  Ir = new Float32Array(16),
  Fr = new Float32Array(9),
  Nr = new Float32Array(4);
function Hn(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let a = Rr[i];
  if ((a === void 0 && ((a = new Float32Array(i)), (Rr[i] = a)), e !== 0)) {
    n.toArray(a, 0);
    for (let o = 1, s = 0; o !== e; ++o) (s += t), r[o].toArray(a, s);
  }
  return a;
}
function Qe(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function et(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Ui(r, e) {
  let t = Pr[e];
  t === void 0 && ((t = new Int32Array(e)), (Pr[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Yl(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function jl(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Qe(t, e)) return;
    r.uniform2fv(this.addr, e), et(t, e);
  }
}
function Zl(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Qe(t, e)) return;
    r.uniform3fv(this.addr, e), et(t, e);
  }
}
function $l(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Qe(t, e)) return;
    r.uniform4fv(this.addr, e), et(t, e);
  }
}
function Kl(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Qe(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n)) return;
    Nr.set(n), r.uniformMatrix2fv(this.addr, !1, Nr), et(t, n);
  }
}
function Jl(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Qe(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n)) return;
    Fr.set(n), r.uniformMatrix3fv(this.addr, !1, Fr), et(t, n);
  }
}
function Ql(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Qe(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), et(t, e);
  } else {
    if (Qe(t, n)) return;
    Ir.set(n), r.uniformMatrix4fv(this.addr, !1, Ir), et(t, n);
  }
}
function ed(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function td(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform2iv(this.addr, e), et(t, e));
}
function nd(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform3iv(this.addr, e), et(t, e));
}
function id(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform4iv(this.addr, e), et(t, e));
}
function ad(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function rd(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform2uiv(this.addr, e), et(t, e));
}
function sd(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform3uiv(this.addr, e), et(t, e));
}
function od(r, e) {
  const t = this.cache;
  Qe(t, e) || (r.uniform4uiv(this.addr, e), et(t, e));
}
function cd(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || _s, i);
}
function fd(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || vs, i);
}
function ld(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Ms, i);
}
function dd(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || xs, i);
}
function ud(r) {
  switch (r) {
    case 5126:
      return Yl;
    case 35664:
      return jl;
    case 35665:
      return Zl;
    case 35666:
      return $l;
    case 35674:
      return Kl;
    case 35675:
      return Jl;
    case 35676:
      return Ql;
    case 5124:
    case 35670:
      return ed;
    case 35667:
    case 35671:
      return td;
    case 35668:
    case 35672:
      return nd;
    case 35669:
    case 35673:
      return id;
    case 5125:
      return ad;
    case 36294:
      return rd;
    case 36295:
      return sd;
    case 36296:
      return od;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return cd;
    case 35679:
    case 36299:
    case 36307:
      return fd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ld;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dd;
  }
}
function hd(r, e) {
  r.uniform1fv(this.addr, e);
}
function pd(r, e) {
  const t = Hn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function md(r, e) {
  const t = Hn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function gd(r, e) {
  const t = Hn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function bd(r, e) {
  const t = Hn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function _d(r, e) {
  const t = Hn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function xd(r, e) {
  const t = Hn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function vd(r, e) {
  r.uniform1iv(this.addr, e);
}
function Md(r, e) {
  r.uniform2iv(this.addr, e);
}
function Sd(r, e) {
  r.uniform3iv(this.addr, e);
}
function yd(r, e) {
  r.uniform4iv(this.addr, e);
}
function wd(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Td(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Ed(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Ad(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Cd(r, e, t) {
  const n = e.length,
    i = Ui(t, n);
  r.uniform1iv(this.addr, i);
  for (let a = 0; a !== n; ++a) t.setTexture2D(e[a] || _s, i[a]);
}
function Ld(r, e, t) {
  const n = e.length,
    i = Ui(t, n);
  r.uniform1iv(this.addr, i);
  for (let a = 0; a !== n; ++a) t.setTexture3D(e[a] || vs, i[a]);
}
function Dd(r, e, t) {
  const n = e.length,
    i = Ui(t, n);
  r.uniform1iv(this.addr, i);
  for (let a = 0; a !== n; ++a) t.setTextureCube(e[a] || Ms, i[a]);
}
function Rd(r, e, t) {
  const n = e.length,
    i = Ui(t, n);
  r.uniform1iv(this.addr, i);
  for (let a = 0; a !== n; ++a) t.setTexture2DArray(e[a] || xs, i[a]);
}
function Pd(r) {
  switch (r) {
    case 5126:
      return hd;
    case 35664:
      return pd;
    case 35665:
      return md;
    case 35666:
      return gd;
    case 35674:
      return bd;
    case 35675:
      return _d;
    case 35676:
      return xd;
    case 5124:
    case 35670:
      return vd;
    case 35667:
    case 35671:
      return Md;
    case 35668:
    case 35672:
      return Sd;
    case 35669:
    case 35673:
      return yd;
    case 5125:
      return wd;
    case 36294:
      return Td;
    case 36295:
      return Ed;
    case 36296:
      return Ad;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Cd;
    case 35679:
    case 36299:
    case 36307:
      return Ld;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Dd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Rd;
  }
}
class Id {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = ud(t.type));
  }
}
class Fd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Pd(t.type));
  }
}
class Nd {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let a = 0, o = i.length; a !== o; ++a) {
      const s = i[a];
      s.setValue(e, t[s.id], n);
    }
  }
}
const ba = /(\w+)(\])?(\[|\.)?/g;
function Ur(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function Ud(r, e, t) {
  const n = r.name,
    i = n.length;
  for (ba.lastIndex = 0; ; ) {
    const a = ba.exec(n),
      o = ba.lastIndex;
    let s = a[1];
    const f = a[2] === "]",
      c = a[3];
    if ((f && (s = s | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      Ur(t, c === void 0 ? new Id(s, r, e) : new Fd(s, r, e));
      break;
    } else {
      let u = t.map[s];
      u === void 0 && ((u = new Nd(s)), Ur(t, u)), (t = u);
    }
  }
}
class Di {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const a = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, a.name);
      Ud(a, o, this);
    }
  }
  setValue(e, t, n, i) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let a = 0, o = t.length; a !== o; ++a) {
      const s = t[a],
        f = n[s.id];
      f.needsUpdate !== !1 && s.setValue(e, f.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, a = e.length; i !== a; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function zr(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let zd = 0;
function Od(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    a = Math.min(e + 6, t.length);
  for (let o = i; o < a; o++) {
    const s = o + 1;
    n.push(`${s === e ? ">" : " "} ${s}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Bd(r) {
  switch (r) {
    case mn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", r),
        ["Linear", "( value )"]
      );
  }
}
function Or(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(i);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Od(r.getShaderSource(e), o)
    );
  } else return i;
}
function Gd(r, e) {
  const t = Bd(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Vd(r, e) {
  let t;
  switch (e) {
    case io:
      t = "Linear";
      break;
    case ao:
      t = "Reinhard";
      break;
    case ro:
      t = "OptimizedCineon";
      break;
    case so:
      t = "ACESFilmic";
      break;
    case oo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function kd(r) {
  return [
    r.extensionDerivatives ||
    !!r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.tangentSpaceNormalMap ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) &&
    r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter($n).join(`
`);
}
function Wd(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Hd(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const a = r.getActiveAttrib(e, i),
      o = a.name;
    let s = 1;
    a.type === 35674 && (s = 2),
      a.type === 35675 && (s = 3),
      a.type === 35676 && (s = 4),
      (t[o] = {
        type: a.type,
        location: r.getAttribLocation(e, o),
        locationSize: s,
      });
  }
  return t;
}
function $n(r) {
  return r !== "";
}
function Br(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Gr(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const qd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ca(r) {
  return r.replace(qd, Xd);
}
function Xd(r, e) {
  const t = ye[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Ca(t);
}
const Yd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Vr(r) {
  return r.replace(Yd, jd);
}
function jd(r, e, t, n) {
  let i = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, a);
  return i;
}
function kr(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Zd(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === Jr
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Ns
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === Zn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function $d(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Bn:
      case Gn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Pi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Kd(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Gn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Jd(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case ts:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case to:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case no:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Qd(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function eu(r, e, t, n) {
  const i = r.getContext(),
    a = t.defines;
  let o = t.vertexShader,
    s = t.fragmentShader;
  const f = Zd(t),
    c = $d(t),
    d = Kd(t),
    u = Jd(t),
    h = Qd(t),
    m = t.isWebGL2 ? "" : kd(t),
    b = Wd(a),
    p = i.createProgram();
  let l,
    _,
    M = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((l = [b].filter($n).join(`
`)),
      l.length > 0 &&
        (l += `
`),
      (_ = [m, b].filter($n).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((l = [
        kr(t),
        "#define SHADER_NAME " + t.shaderName,
        b,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + d : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + f : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter($n).join(`
`)),
      (_ = [
        m,
        kr(t),
        "#define SHADER_NAME " + t.shaderName,
        b,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + d : "",
        t.envMap ? "#define " + u : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + f : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Gt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Gt ? ye.tonemapping_pars_fragment : "",
        t.toneMapping !== Gt ? Vd("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        ye.encodings_pars_fragment,
        Gd("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter($n).join(`
`))),
    (o = Ca(o)),
    (o = Br(o, t)),
    (o = Gr(o, t)),
    (s = Ca(s)),
    (s = Br(s, t)),
    (s = Gr(s, t)),
    (o = Vr(o)),
    (s = Vr(s)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((M = `#version 300 es
`),
      (l =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        l),
      (_ =
        [
          "#define varying in",
          t.glslVersion === lr
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === lr ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        _));
  const T = M + l + o,
    w = M + _ + s,
    y = zr(i, 35633, T),
    A = zr(i, 35632, w);
  if (
    (i.attachShader(p, y),
    i.attachShader(p, A),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p),
    r.debug.checkShaderErrors)
  ) {
    const E = i.getProgramInfoLog(p).trim(),
      F = i.getShaderInfoLog(y).trim(),
      X = i.getShaderInfoLog(A).trim();
    let re = !0,
      O = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      re = !1;
      const I = Or(i, y, "vertex"),
        q = Or(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          E +
          `
` +
          I +
          `
` +
          q
      );
    } else
      E !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", E)
        : (F === "" || X === "") && (O = !1);
    O &&
      (this.diagnostics = {
        runnable: re,
        programLog: E,
        vertexShader: { log: F, prefix: l },
        fragmentShader: { log: X, prefix: _ },
      });
  }
  i.deleteShader(y), i.deleteShader(A);
  let N;
  this.getUniforms = function () {
    return N === void 0 && (N = new Di(i, p)), N;
  };
  let x;
  return (
    (this.getAttributes = function () {
      return x === void 0 && (x = Hd(i, p)), x;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = zd++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = y),
    (this.fragmentShader = A),
    this
  );
}
let tu = 0;
class nu {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      a = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(a) === !1 && (o.add(a), a.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new iu(e)), t.set(e, n)), n;
  }
}
class iu {
  constructor(e) {
    (this.id = tu++), (this.code = e), (this.usedTimes = 0);
  }
}
function au(r, e, t, n, i, a, o) {
  const s = new ls(),
    f = new nu(),
    c = [],
    d = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    h = i.vertexTextures;
  let m = i.precision;
  const b = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(x, E, F, X, re) {
    const O = X.fog,
      I = re.geometry,
      q = x.isMeshStandardMaterial ? X.environment : null,
      Y = (x.isMeshStandardMaterial ? t : e).get(x.envMap || q),
      j = !!Y && Y.mapping === Pi ? Y.image.height : null,
      W = b[x.type];
    x.precision !== null &&
      ((m = i.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const P =
        I.morphAttributes.position ||
        I.morphAttributes.normal ||
        I.morphAttributes.color,
      U = P !== void 0 ? P.length : 0;
    let J = 0;
    I.morphAttributes.position !== void 0 && (J = 1),
      I.morphAttributes.normal !== void 0 && (J = 2),
      I.morphAttributes.color !== void 0 && (J = 3);
    let $, Z, fe, ge;
    if (W) {
      const Pe = Et[W];
      ($ = Pe.vertexShader), (Z = Pe.fragmentShader);
    } else
      ($ = x.vertexShader),
        (Z = x.fragmentShader),
        f.update(x),
        (fe = f.getVertexShaderID(x)),
        (ge = f.getFragmentShaderID(x));
    const H = r.getRenderTarget(),
      De = x.alphaTest > 0,
      pe = x.clearcoat > 0,
      be = x.iridescence > 0;
    return {
      isWebGL2: d,
      shaderID: W,
      shaderName: x.type,
      vertexShader: $,
      fragmentShader: Z,
      defines: x.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: ge,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: re.isInstancedMesh === !0,
      instancingColor: re.isInstancedMesh === !0 && re.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        H === null
          ? r.outputEncoding
          : H.isXRRenderTarget === !0
          ? H.texture.encoding
          : mn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!Y,
      envMapMode: Y && Y.mapping,
      envMapCubeUVHeight: j,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === Co,
      tangentSpaceNormalMap: x.normalMapType === Ao,
      decodeVideoTexture:
        !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === ze,
      clearcoat: pe,
      clearcoatMap: pe && !!x.clearcoatMap,
      clearcoatRoughnessMap: pe && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: pe && !!x.clearcoatNormalMap,
      iridescence: be,
      iridescenceMap: be && !!x.iridescenceMap,
      iridescenceThicknessMap: be && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === Un,
      alphaMap: !!x.alphaMap,
      alphaTest: De,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!I.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!I.attributes.color &&
        I.attributes.color.itemSize === 4,
      vertexUvs:
        !!x.map ||
        !!x.bumpMap ||
        !!x.normalMap ||
        !!x.specularMap ||
        !!x.alphaMap ||
        !!x.emissiveMap ||
        !!x.roughnessMap ||
        !!x.metalnessMap ||
        !!x.clearcoatMap ||
        !!x.clearcoatRoughnessMap ||
        !!x.clearcoatNormalMap ||
        !!x.iridescenceMap ||
        !!x.iridescenceThicknessMap ||
        !!x.displacementMap ||
        !!x.transmissionMap ||
        !!x.thicknessMap ||
        !!x.specularIntensityMap ||
        !!x.specularColorMap ||
        !!x.sheenColorMap ||
        !!x.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!x.map ||
          !!x.bumpMap ||
          !!x.normalMap ||
          !!x.specularMap ||
          !!x.alphaMap ||
          !!x.emissiveMap ||
          !!x.roughnessMap ||
          !!x.metalnessMap ||
          !!x.clearcoatNormalMap ||
          !!x.iridescenceMap ||
          !!x.iridescenceThicknessMap ||
          x.transmission > 0 ||
          !!x.transmissionMap ||
          !!x.thicknessMap ||
          !!x.specularIntensityMap ||
          !!x.specularColorMap ||
          x.sheen > 0 ||
          !!x.sheenColorMap ||
          !!x.sheenRoughnessMap
        ) && !!x.displacementMap,
      fog: !!O,
      useFog: x.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: re.isSkinnedMesh === !0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: U,
      morphTextureStride: J,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && F.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: x.toneMapped ? r.toneMapping : Gt,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Ot,
      flipSided: x.side === mt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: d || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: d || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: d || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function l(x) {
    const E = [];
    if (
      (x.shaderID
        ? E.push(x.shaderID)
        : (E.push(x.customVertexShaderID), E.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const F in x.defines) E.push(F), E.push(x.defines[F]);
    return (
      x.isRawShaderMaterial === !1 &&
        (_(E, x), M(E, x), E.push(r.outputEncoding)),
      E.push(x.customProgramCacheKey),
      E.join()
    );
  }
  function _(x, E) {
    x.push(E.precision),
      x.push(E.outputEncoding),
      x.push(E.envMapMode),
      x.push(E.envMapCubeUVHeight),
      x.push(E.combine),
      x.push(E.vertexUvs),
      x.push(E.fogExp2),
      x.push(E.sizeAttenuation),
      x.push(E.morphTargetsCount),
      x.push(E.morphAttributeCount),
      x.push(E.numDirLights),
      x.push(E.numPointLights),
      x.push(E.numSpotLights),
      x.push(E.numSpotLightMaps),
      x.push(E.numHemiLights),
      x.push(E.numRectAreaLights),
      x.push(E.numDirLightShadows),
      x.push(E.numPointLightShadows),
      x.push(E.numSpotLightShadows),
      x.push(E.numSpotLightShadowsWithMaps),
      x.push(E.shadowMapType),
      x.push(E.toneMapping),
      x.push(E.numClippingPlanes),
      x.push(E.numClipIntersection),
      x.push(E.depthPacking);
  }
  function M(x, E) {
    s.disableAll(),
      E.isWebGL2 && s.enable(0),
      E.supportsVertexTextures && s.enable(1),
      E.instancing && s.enable(2),
      E.instancingColor && s.enable(3),
      E.map && s.enable(4),
      E.matcap && s.enable(5),
      E.envMap && s.enable(6),
      E.lightMap && s.enable(7),
      E.aoMap && s.enable(8),
      E.emissiveMap && s.enable(9),
      E.bumpMap && s.enable(10),
      E.normalMap && s.enable(11),
      E.objectSpaceNormalMap && s.enable(12),
      E.tangentSpaceNormalMap && s.enable(13),
      E.clearcoat && s.enable(14),
      E.clearcoatMap && s.enable(15),
      E.clearcoatRoughnessMap && s.enable(16),
      E.clearcoatNormalMap && s.enable(17),
      E.iridescence && s.enable(18),
      E.iridescenceMap && s.enable(19),
      E.iridescenceThicknessMap && s.enable(20),
      E.displacementMap && s.enable(21),
      E.specularMap && s.enable(22),
      E.roughnessMap && s.enable(23),
      E.metalnessMap && s.enable(24),
      E.gradientMap && s.enable(25),
      E.alphaMap && s.enable(26),
      E.alphaTest && s.enable(27),
      E.vertexColors && s.enable(28),
      E.vertexAlphas && s.enable(29),
      E.vertexUvs && s.enable(30),
      E.vertexTangents && s.enable(31),
      E.uvsVertexOnly && s.enable(32),
      x.push(s.mask),
      s.disableAll(),
      E.fog && s.enable(0),
      E.useFog && s.enable(1),
      E.flatShading && s.enable(2),
      E.logarithmicDepthBuffer && s.enable(3),
      E.skinning && s.enable(4),
      E.morphTargets && s.enable(5),
      E.morphNormals && s.enable(6),
      E.morphColors && s.enable(7),
      E.premultipliedAlpha && s.enable(8),
      E.shadowMapEnabled && s.enable(9),
      E.physicallyCorrectLights && s.enable(10),
      E.doubleSided && s.enable(11),
      E.flipSided && s.enable(12),
      E.useDepthPacking && s.enable(13),
      E.dithering && s.enable(14),
      E.specularIntensityMap && s.enable(15),
      E.specularColorMap && s.enable(16),
      E.transmission && s.enable(17),
      E.transmissionMap && s.enable(18),
      E.thicknessMap && s.enable(19),
      E.sheen && s.enable(20),
      E.sheenColorMap && s.enable(21),
      E.sheenRoughnessMap && s.enable(22),
      E.decodeVideoTexture && s.enable(23),
      E.opaque && s.enable(24),
      x.push(s.mask);
  }
  function T(x) {
    const E = b[x.type];
    let F;
    if (E) {
      const X = Et[E];
      F = Ho.clone(X.uniforms);
    } else F = x.uniforms;
    return F;
  }
  function w(x, E) {
    let F;
    for (let X = 0, re = c.length; X < re; X++) {
      const O = c[X];
      if (O.cacheKey === E) {
        (F = O), ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && ((F = new eu(r, E, x, a)), c.push(F)), F;
  }
  function y(x) {
    if (--x.usedTimes === 0) {
      const E = c.indexOf(x);
      (c[E] = c[c.length - 1]), c.pop(), x.destroy();
    }
  }
  function A(x) {
    f.remove(x);
  }
  function N() {
    f.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: l,
    getUniforms: T,
    acquireProgram: w,
    releaseProgram: y,
    releaseShaderCache: A,
    programs: c,
    dispose: N,
  };
}
function ru() {
  let r = new WeakMap();
  function e(a) {
    let o = r.get(a);
    return o === void 0 && ((o = {}), r.set(a, o)), o;
  }
  function t(a) {
    r.delete(a);
  }
  function n(a, o, s) {
    r.get(a)[o] = s;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function su(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function Wr(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function Hr() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function a() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(u, h, m, b, p, l) {
    let _ = r[e];
    return (
      _ === void 0
        ? ((_ = {
            id: u.id,
            object: u,
            geometry: h,
            material: m,
            groupOrder: b,
            renderOrder: u.renderOrder,
            z: p,
            group: l,
          }),
          (r[e] = _))
        : ((_.id = u.id),
          (_.object = u),
          (_.geometry = h),
          (_.material = m),
          (_.groupOrder = b),
          (_.renderOrder = u.renderOrder),
          (_.z = p),
          (_.group = l)),
      e++,
      _
    );
  }
  function s(u, h, m, b, p, l) {
    const _ = o(u, h, m, b, p, l);
    m.transmission > 0
      ? n.push(_)
      : m.transparent === !0
      ? i.push(_)
      : t.push(_);
  }
  function f(u, h, m, b, p, l) {
    const _ = o(u, h, m, b, p, l);
    m.transmission > 0
      ? n.unshift(_)
      : m.transparent === !0
      ? i.unshift(_)
      : t.unshift(_);
  }
  function c(u, h) {
    t.length > 1 && t.sort(u || su),
      n.length > 1 && n.sort(h || Wr),
      i.length > 1 && i.sort(h || Wr);
  }
  function d() {
    for (let u = e, h = r.length; u < h; u++) {
      const m = r[u];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: a,
    push: s,
    unshift: f,
    finish: d,
    sort: c,
  };
}
function ou() {
  let r = new WeakMap();
  function e(n, i) {
    const a = r.get(n);
    let o;
    return (
      a === void 0
        ? ((o = new Hr()), r.set(n, [o]))
        : i >= a.length
        ? ((o = new Hr()), a.push(o))
        : (o = a[i]),
      o
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function cu() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new D(), color: new Ie() };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new D(), color: new Ie(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new D(), skyColor: new Ie(), groundColor: new Ie() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function fu() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let lu = 0;
function du(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function uu(r, e) {
  const t = new cu(),
    n = fu(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let d = 0; d < 9; d++) i.probe.push(new D());
  const a = new D(),
    o = new qe(),
    s = new qe();
  function f(d, u) {
    let h = 0,
      m = 0,
      b = 0;
    for (let X = 0; X < 9; X++) i.probe[X].set(0, 0, 0);
    let p = 0,
      l = 0,
      _ = 0,
      M = 0,
      T = 0,
      w = 0,
      y = 0,
      A = 0,
      N = 0,
      x = 0;
    d.sort(du);
    const E = u !== !0 ? Math.PI : 1;
    for (let X = 0, re = d.length; X < re; X++) {
      const O = d[X],
        I = O.color,
        q = O.intensity,
        Y = O.distance,
        j = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        (h += I.r * q * E), (m += I.g * q * E), (b += I.b * q * E);
      else if (O.isLightProbe)
        for (let W = 0; W < 9; W++)
          i.probe[W].addScaledVector(O.sh.coefficients[W], q);
      else if (O.isDirectionalLight) {
        const W = t.get(O);
        if (
          (W.color.copy(O.color).multiplyScalar(O.intensity * E), O.castShadow)
        ) {
          const P = O.shadow,
            U = n.get(O);
          (U.shadowBias = P.bias),
            (U.shadowNormalBias = P.normalBias),
            (U.shadowRadius = P.radius),
            (U.shadowMapSize = P.mapSize),
            (i.directionalShadow[p] = U),
            (i.directionalShadowMap[p] = j),
            (i.directionalShadowMatrix[p] = O.shadow.matrix),
            w++;
        }
        (i.directional[p] = W), p++;
      } else if (O.isSpotLight) {
        const W = t.get(O);
        W.position.setFromMatrixPosition(O.matrixWorld),
          W.color.copy(I).multiplyScalar(q * E),
          (W.distance = Y),
          (W.coneCos = Math.cos(O.angle)),
          (W.penumbraCos = Math.cos(O.angle * (1 - O.penumbra))),
          (W.decay = O.decay),
          (i.spot[_] = W);
        const P = O.shadow;
        if (
          (O.map &&
            ((i.spotLightMap[N] = O.map),
            N++,
            P.updateMatrices(O),
            O.castShadow && x++),
          (i.spotLightMatrix[_] = P.matrix),
          O.castShadow)
        ) {
          const U = n.get(O);
          (U.shadowBias = P.bias),
            (U.shadowNormalBias = P.normalBias),
            (U.shadowRadius = P.radius),
            (U.shadowMapSize = P.mapSize),
            (i.spotShadow[_] = U),
            (i.spotShadowMap[_] = j),
            A++;
        }
        _++;
      } else if (O.isRectAreaLight) {
        const W = t.get(O);
        W.color.copy(I).multiplyScalar(q),
          W.halfWidth.set(O.width * 0.5, 0, 0),
          W.halfHeight.set(0, O.height * 0.5, 0),
          (i.rectArea[M] = W),
          M++;
      } else if (O.isPointLight) {
        const W = t.get(O);
        if (
          (W.color.copy(O.color).multiplyScalar(O.intensity * E),
          (W.distance = O.distance),
          (W.decay = O.decay),
          O.castShadow)
        ) {
          const P = O.shadow,
            U = n.get(O);
          (U.shadowBias = P.bias),
            (U.shadowNormalBias = P.normalBias),
            (U.shadowRadius = P.radius),
            (U.shadowMapSize = P.mapSize),
            (U.shadowCameraNear = P.camera.near),
            (U.shadowCameraFar = P.camera.far),
            (i.pointShadow[l] = U),
            (i.pointShadowMap[l] = j),
            (i.pointShadowMatrix[l] = O.shadow.matrix),
            y++;
        }
        (i.point[l] = W), l++;
      } else if (O.isHemisphereLight) {
        const W = t.get(O);
        W.skyColor.copy(O.color).multiplyScalar(q * E),
          W.groundColor.copy(O.groundColor).multiplyScalar(q * E),
          (i.hemi[T] = W),
          T++;
      }
    }
    M > 0 &&
      (e.isWebGL2 || r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ee.LTC_FLOAT_1), (i.rectAreaLTC2 = ee.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ee.LTC_HALF_1), (i.rectAreaLTC2 = ee.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = h),
      (i.ambient[1] = m),
      (i.ambient[2] = b);
    const F = i.hash;
    (F.directionalLength !== p ||
      F.pointLength !== l ||
      F.spotLength !== _ ||
      F.rectAreaLength !== M ||
      F.hemiLength !== T ||
      F.numDirectionalShadows !== w ||
      F.numPointShadows !== y ||
      F.numSpotShadows !== A ||
      F.numSpotMaps !== N) &&
      ((i.directional.length = p),
      (i.spot.length = _),
      (i.rectArea.length = M),
      (i.point.length = l),
      (i.hemi.length = T),
      (i.directionalShadow.length = w),
      (i.directionalShadowMap.length = w),
      (i.pointShadow.length = y),
      (i.pointShadowMap.length = y),
      (i.spotShadow.length = A),
      (i.spotShadowMap.length = A),
      (i.directionalShadowMatrix.length = w),
      (i.pointShadowMatrix.length = y),
      (i.spotLightMatrix.length = A + N - x),
      (i.spotLightMap.length = N),
      (i.numSpotLightShadowsWithMaps = x),
      (F.directionalLength = p),
      (F.pointLength = l),
      (F.spotLength = _),
      (F.rectAreaLength = M),
      (F.hemiLength = T),
      (F.numDirectionalShadows = w),
      (F.numPointShadows = y),
      (F.numSpotShadows = A),
      (F.numSpotMaps = N),
      (i.version = lu++));
  }
  function c(d, u) {
    let h = 0,
      m = 0,
      b = 0,
      p = 0,
      l = 0;
    const _ = u.matrixWorldInverse;
    for (let M = 0, T = d.length; M < T; M++) {
      const w = d[M];
      if (w.isDirectionalLight) {
        const y = i.directional[h];
        y.direction.setFromMatrixPosition(w.matrixWorld),
          a.setFromMatrixPosition(w.target.matrixWorld),
          y.direction.sub(a),
          y.direction.transformDirection(_),
          h++;
      } else if (w.isSpotLight) {
        const y = i.spot[b];
        y.position.setFromMatrixPosition(w.matrixWorld),
          y.position.applyMatrix4(_),
          y.direction.setFromMatrixPosition(w.matrixWorld),
          a.setFromMatrixPosition(w.target.matrixWorld),
          y.direction.sub(a),
          y.direction.transformDirection(_),
          b++;
      } else if (w.isRectAreaLight) {
        const y = i.rectArea[p];
        y.position.setFromMatrixPosition(w.matrixWorld),
          y.position.applyMatrix4(_),
          s.identity(),
          o.copy(w.matrixWorld),
          o.premultiply(_),
          s.extractRotation(o),
          y.halfWidth.set(w.width * 0.5, 0, 0),
          y.halfHeight.set(0, w.height * 0.5, 0),
          y.halfWidth.applyMatrix4(s),
          y.halfHeight.applyMatrix4(s),
          p++;
      } else if (w.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(w.matrixWorld),
          y.position.applyMatrix4(_),
          m++;
      } else if (w.isHemisphereLight) {
        const y = i.hemi[l];
        y.direction.setFromMatrixPosition(w.matrixWorld),
          y.direction.transformDirection(_),
          l++;
      }
    }
  }
  return { setup: f, setupView: c, state: i };
}
function qr(r, e) {
  const t = new uu(r, e),
    n = [],
    i = [];
  function a() {
    (n.length = 0), (i.length = 0);
  }
  function o(u) {
    n.push(u);
  }
  function s(u) {
    i.push(u);
  }
  function f(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: a,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: f,
    setupLightsView: c,
    pushLight: o,
    pushShadow: s,
  };
}
function hu(r, e) {
  let t = new WeakMap();
  function n(a, o = 0) {
    const s = t.get(a);
    let f;
    return (
      s === void 0
        ? ((f = new qr(r, e)), t.set(a, [f]))
        : o >= s.length
        ? ((f = new qr(r, e)), s.push(f))
        : (f = s[o]),
      f
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class pu extends ii {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = To),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class mu extends ii {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new D()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const gu = `void main() {
gl_Position = vec4( position, 1.0 );
}`,
  bu = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
    void main() {
        const float samples = float( VSM_SAMPLES );
        float mean = 0.0;
        float squared_mean = 0.0;
        float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
        float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
        for ( float i = 0.0; i < samples; i ++ ) {
            float uvOffset = uvStart + i * uvStride;
            #ifdef HORIZONTAL_PASS
            vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
            mean += distribution.x;
            squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
            #else
                float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
            mean += depth;
            squared_mean += depth * depth;
            #endif
        }
        mean = mean / samples;
        squared_mean = squared_mean / samples;
        float std_dev = sqrt( squared_mean - mean * mean );
        gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
    }`;
function _u(r, e, t) {
  let n = new gs();
  const i = new Fe(),
    a = new Fe(),
    o = new je(),
    s = new pu({ depthPacking: Eo }),
    f = new mu(),
    c = {},
    d = t.maxTextureSize,
    u = { 0: mt, 1: On, 2: Ot },
    h = new Jt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Fe() },
        radius: { value: 4 },
      },
      vertexShader: gu,
      fragmentShader: bu,
    }),
    m = h.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const b = new Vt();
  b.setAttribute(
    "position",
    new Ct(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new Bt(b, h),
    l = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Jr),
    (this.render = function (w, y, A) {
      if (
        l.enabled === !1 ||
        (l.autoUpdate === !1 && l.needsUpdate === !1) ||
        w.length === 0
      )
        return;
      const N = r.getRenderTarget(),
        x = r.getActiveCubeFace(),
        E = r.getActiveMipmapLevel(),
        F = r.state;
      F.setBlending(Kt),
        F.buffers.color.setClear(1, 1, 1, 1),
        F.buffers.depth.setTest(!0),
        F.setScissorTest(!1);
      for (let X = 0, re = w.length; X < re; X++) {
        const O = w[X],
          I = O.shadow;
        if (I === void 0) {
          console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
          continue;
        }
        if (I.autoUpdate === !1 && I.needsUpdate === !1) continue;
        i.copy(I.mapSize);
        const q = I.getFrameExtents();
        if (
          (i.multiply(q),
          a.copy(I.mapSize),
          (i.x > d || i.y > d) &&
            (i.x > d &&
              ((a.x = Math.floor(d / q.x)),
              (i.x = a.x * q.x),
              (I.mapSize.x = a.x)),
            i.y > d &&
              ((a.y = Math.floor(d / q.y)),
              (i.y = a.y * q.y),
              (I.mapSize.y = a.y))),
          I.map === null)
        ) {
          const j = this.type !== Zn ? { minFilter: tt, magFilter: tt } : {};
          (I.map = new gn(i.x, i.y, j)),
            (I.map.texture.name = O.name + ".shadowMap"),
            I.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(I.map), r.clear();
        const Y = I.getViewportCount();
        for (let j = 0; j < Y; j++) {
          const W = I.getViewport(j);
          o.set(a.x * W.x, a.y * W.y, a.x * W.z, a.y * W.w),
            F.viewport(o),
            I.updateMatrices(O, j),
            (n = I.getFrustum()),
            T(y, A, I.camera, O, this.type);
        }
        I.isPointLightShadow !== !0 && this.type === Zn && _(I, A),
          (I.needsUpdate = !1);
      }
      (l.needsUpdate = !1), r.setRenderTarget(N, x, E);
    });
  function _(w, y) {
    const A = e.update(p);
    h.defines.VSM_SAMPLES !== w.blurSamples &&
      ((h.defines.VSM_SAMPLES = w.blurSamples),
      (m.defines.VSM_SAMPLES = w.blurSamples),
      (h.needsUpdate = !0),
      (m.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new gn(i.x, i.y)),
      (h.uniforms.shadow_pass.value = w.map.texture),
      (h.uniforms.resolution.value = w.mapSize),
      (h.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.mapPass),
      r.clear(),
      r.renderBufferDirect(y, null, A, h, p, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.map),
      r.clear(),
      r.renderBufferDirect(y, null, A, m, p, null);
  }
  function M(w, y, A, N, x, E) {
    let F = null;
    const X =
      A.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (
      (X !== void 0 ? (F = X) : (F = A.isPointLight === !0 ? f : s),
      (r.localClippingEnabled &&
        y.clipShadows === !0 &&
        Array.isArray(y.clippingPlanes) &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0))
    ) {
      const re = F.uuid,
        O = y.uuid;
      let I = c[re];
      I === void 0 && ((I = {}), (c[re] = I));
      let q = I[O];
      q === void 0 && ((q = F.clone()), (I[O] = q)), (F = q);
    }
    return (
      (F.visible = y.visible),
      (F.wireframe = y.wireframe),
      E === Zn
        ? (F.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (F.side = y.shadowSide !== null ? y.shadowSide : u[y.side]),
      (F.alphaMap = y.alphaMap),
      (F.alphaTest = y.alphaTest),
      (F.clipShadows = y.clipShadows),
      (F.clippingPlanes = y.clippingPlanes),
      (F.clipIntersection = y.clipIntersection),
      (F.displacementMap = y.displacementMap),
      (F.displacementScale = y.displacementScale),
      (F.displacementBias = y.displacementBias),
      (F.wireframeLinewidth = y.wireframeLinewidth),
      (F.linewidth = y.linewidth),
      A.isPointLight === !0 &&
        F.isMeshDistanceMaterial === !0 &&
        (F.referencePosition.setFromMatrixPosition(A.matrixWorld),
        (F.nearDistance = N),
        (F.farDistance = x)),
      F
    );
  }
  function T(w, y, A, N, x) {
    if (w.visible === !1) return;
    if (
      w.layers.test(y.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && x === Zn)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, w.matrixWorld);
      const X = e.update(w),
        re = w.material;
      if (Array.isArray(re)) {
        const O = X.groups;
        for (let I = 0, q = O.length; I < q; I++) {
          const Y = O[I],
            j = re[Y.materialIndex];
          if (j && j.visible) {
            const W = M(w, j, N, A.near, A.far, x);
            r.renderBufferDirect(A, null, X, W, w, Y);
          }
        }
      } else if (re.visible) {
        const O = M(w, re, N, A.near, A.far, x);
        r.renderBufferDirect(A, null, X, O, w, null);
      }
    }
    const F = w.children;
    for (let X = 0, re = F.length; X < re; X++) T(F[X], y, A, N, x);
  }
}
function xu(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const ae = new je();
    let B = null;
    const ie = new je(0, 0, 0, 0);
    return {
      setMask: function (te) {
        B !== te && !C && (r.colorMask(te, te, te, te), (B = te));
      },
      setLocked: function (te) {
        C = te;
      },
      setClear: function (te, Ee, We, Be, kt) {
        kt === !0 && ((te *= Be), (Ee *= Be), (We *= Be)),
          ae.set(te, Ee, We, Be),
          ie.equals(ae) === !1 && (r.clearColor(te, Ee, We, Be), ie.copy(ae));
      },
      reset: function () {
        (C = !1), (B = null), ie.set(-1, 0, 0, 0);
      },
    };
  }
  function a() {
    let C = !1,
      ae = null,
      B = null,
      ie = null;
    return {
      setTest: function (te) {
        te ? De(2929) : pe(2929);
      },
      setMask: function (te) {
        ae !== te && !C && (r.depthMask(te), (ae = te));
      },
      setFunc: function (te) {
        if (B !== te) {
          if (te)
            switch (te) {
              case js:
                r.depthFunc(512);
                break;
              case Zs:
                r.depthFunc(519);
                break;
              case $s:
                r.depthFunc(513);
                break;
              case Ma:
                r.depthFunc(515);
                break;
              case Ks:
                r.depthFunc(514);
                break;
              case Js:
                r.depthFunc(518);
                break;
              case Qs:
                r.depthFunc(516);
                break;
              case eo:
                r.depthFunc(517);
                break;
              default:
                r.depthFunc(515);
            }
          else r.depthFunc(515);
          B = te;
        }
      },
      setLocked: function (te) {
        C = te;
      },
      setClear: function (te) {
        ie !== te && (r.clearDepth(te), (ie = te));
      },
      reset: function () {
        (C = !1), (ae = null), (B = null), (ie = null);
      },
    };
  }
  function o() {
    let C = !1,
      ae = null,
      B = null,
      ie = null,
      te = null,
      Ee = null,
      We = null,
      Be = null,
      kt = null;
    return {
      setTest: function (Ne) {
        C || (Ne ? De(2960) : pe(2960));
      },
      setMask: function (Ne) {
        ae !== Ne && !C && (r.stencilMask(Ne), (ae = Ne));
      },
      setFunc: function (Ne, Dt, ft) {
        (B !== Ne || ie !== Dt || te !== ft) &&
          (r.stencilFunc(Ne, Dt, ft), (B = Ne), (ie = Dt), (te = ft));
      },
      setOp: function (Ne, Dt, ft) {
        (Ee !== Ne || We !== Dt || Be !== ft) &&
          (r.stencilOp(Ne, Dt, ft), (Ee = Ne), (We = Dt), (Be = ft));
      },
      setLocked: function (Ne) {
        C = Ne;
      },
      setClear: function (Ne) {
        kt !== Ne && (r.clearStencil(Ne), (kt = Ne));
      },
      reset: function () {
        (C = !1),
          (ae = null),
          (B = null),
          (ie = null),
          (te = null),
          (Ee = null),
          (We = null),
          (Be = null),
          (kt = null);
      },
    };
  }
  const s = new i(),
    f = new a(),
    c = new o(),
    d = new WeakMap(),
    u = new WeakMap();
  let h = {},
    m = {},
    b = new WeakMap(),
    p = [],
    l = null,
    _ = !1,
    M = null,
    T = null,
    w = null,
    y = null,
    A = null,
    N = null,
    x = null,
    E = !1,
    F = null,
    X = null,
    re = null,
    O = null,
    I = null;
  const q = r.getParameter(35661);
  let Y = !1,
    j = 0;
  const W = r.getParameter(7938);
  W.indexOf("WebGL") !== -1
    ? ((j = parseFloat(/^WebGL (\d)/.exec(W)[1])), (Y = j >= 1))
    : W.indexOf("OpenGL ES") !== -1 &&
      ((j = parseFloat(/^OpenGL ES (\d)/.exec(W)[1])), (Y = j >= 2));
  let P = null,
    U = {};
  const J = r.getParameter(3088),
    $ = r.getParameter(2978),
    Z = new je().fromArray(J),
    fe = new je().fromArray($);
  function ge(C, ae, B) {
    const ie = new Uint8Array(4),
      te = r.createTexture();
    r.bindTexture(C, te),
      r.texParameteri(C, 10241, 9728),
      r.texParameteri(C, 10240, 9728);
    for (let Ee = 0; Ee < B; Ee++)
      r.texImage2D(ae + Ee, 0, 6408, 1, 1, 0, 6408, 5121, ie);
    return te;
  }
  const H = {};
  (H[3553] = ge(3553, 3553, 1)),
    (H[34067] = ge(34067, 34069, 6)),
    s.setClear(0, 0, 0, 1),
    f.setClear(1),
    c.setClear(0),
    De(2929),
    f.setFunc(Ma),
    Ke(!1),
    yt(Fa),
    De(2884),
    Xe(Kt);
  function De(C) {
    h[C] !== !0 && (r.enable(C), (h[C] = !0));
  }
  function pe(C) {
    h[C] !== !1 && (r.disable(C), (h[C] = !1));
  }
  function be(C, ae) {
    return m[C] !== ae
      ? (r.bindFramebuffer(C, ae),
        (m[C] = ae),
        n && (C === 36009 && (m[36160] = ae), C === 36160 && (m[36009] = ae)),
        !0)
      : !1;
  }
  function oe(C, ae) {
    let B = p,
      ie = !1;
    if (C)
      if (
        ((B = b.get(ae)),
        B === void 0 && ((B = []), b.set(ae, B)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const te = C.texture;
        if (B.length !== te.length || B[0] !== 36064) {
          for (let Ee = 0, We = te.length; Ee < We; Ee++) B[Ee] = 36064 + Ee;
          (B.length = te.length), (ie = !0);
        }
      } else B[0] !== 36064 && ((B[0] = 36064), (ie = !0));
    else B[0] !== 1029 && ((B[0] = 1029), (ie = !0));
    ie &&
      (t.isWebGL2
        ? r.drawBuffers(B)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B));
  }
  function Pe(C) {
    return l !== C ? (r.useProgram(C), (l = C), !0) : !1;
  }
  const Se = { [Fn]: 32774, [zs]: 32778, [Os]: 32779 };
  if (n) (Se[Oa] = 32775), (Se[Ba] = 32776);
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((Se[Oa] = C.MIN_EXT), (Se[Ba] = C.MAX_EXT));
  }
  const he = {
    [Bs]: 0,
    [Gs]: 1,
    [Vs]: 768,
    [Qr]: 770,
    [Ys]: 776,
    [qs]: 774,
    [Ws]: 772,
    [ks]: 769,
    [es]: 771,
    [Xs]: 775,
    [Hs]: 773,
  };
  function Xe(C, ae, B, ie, te, Ee, We, Be) {
    if (C === Kt) {
      _ === !0 && (pe(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (De(3042), (_ = !0)), C !== Us)) {
      if (C !== M || Be !== E) {
        if (
          ((T !== Fn || A !== Fn) &&
            (r.blendEquation(32774), (T = Fn), (A = Fn)),
          Be)
        )
          switch (C) {
            case Un:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Na:
              r.blendFunc(1, 1);
              break;
            case Ua:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case za:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Un:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Na:
              r.blendFunc(770, 1);
              break;
            case Ua:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case za:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        (w = null), (y = null), (N = null), (x = null), (M = C), (E = Be);
      }
      return;
    }
    (te = te || ae),
      (Ee = Ee || B),
      (We = We || ie),
      (ae !== T || te !== A) &&
        (r.blendEquationSeparate(Se[ae], Se[te]), (T = ae), (A = te)),
      (B !== w || ie !== y || Ee !== N || We !== x) &&
        (r.blendFuncSeparate(he[B], he[ie], he[Ee], he[We]),
        (w = B),
        (y = ie),
        (N = Ee),
        (x = We)),
      (M = C),
      (E = null);
  }
  function it(C, ae) {
    C.side === Ot ? pe(2884) : De(2884);
    let B = C.side === mt;
    ae && (B = !B),
      Ke(B),
      C.blending === Un && C.transparent === !1
        ? Xe(Kt)
        : Xe(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha
          ),
      f.setFunc(C.depthFunc),
      f.setTest(C.depthTest),
      f.setMask(C.depthWrite),
      s.setMask(C.colorWrite);
    const ie = C.stencilWrite;
    c.setTest(ie),
      ie &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      Re(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ? De(32926) : pe(32926);
  }
  function Ke(C) {
    F !== C && (C ? r.frontFace(2304) : r.frontFace(2305), (F = C));
  }
  function yt(C) {
    C !== Is
      ? (De(2884),
        C !== X &&
          (C === Fa
            ? r.cullFace(1029)
            : C === Fs
            ? r.cullFace(1028)
            : r.cullFace(1032)))
      : pe(2884),
      (X = C);
  }
  function Ye(C) {
    C !== re && (Y && r.lineWidth(C), (re = C));
  }
  function Re(C, ae, B) {
    C
      ? (De(32823),
        (O !== ae || I !== B) && (r.polygonOffset(ae, B), (O = ae), (I = B)))
      : pe(32823);
  }
  function Lt(C) {
    C ? De(3089) : pe(3089);
  }
  function wt(C) {
    C === void 0 && (C = 33984 + q - 1),
      P !== C && (r.activeTexture(C), (P = C));
  }
  function S(C, ae) {
    P === null && wt();
    let B = U[P];
    B === void 0 && ((B = { type: void 0, texture: void 0 }), (U[P] = B)),
      (B.type !== C || B.texture !== ae) &&
        (r.bindTexture(C, ae || H[C]), (B.type = C), (B.texture = ae));
  }
  function g() {
    const C = U[P];
    C !== void 0 &&
      C.type !== void 0 &&
      (r.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function V() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function K() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Q() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ne() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function z() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le(C) {
    Z.equals(C) === !1 && (r.scissor(C.x, C.y, C.z, C.w), Z.copy(C));
  }
  function ce(C) {
    fe.equals(C) === !1 && (r.viewport(C.x, C.y, C.z, C.w), fe.copy(C));
  }
  function ve(C, ae) {
    let B = u.get(ae);
    B === void 0 && ((B = new WeakMap()), u.set(ae, B));
    let ie = B.get(C);
    ie === void 0 && ((ie = r.getUniformBlockIndex(ae, C.name)), B.set(C, ie));
  }
  function Ae(C, ae) {
    const ie = u.get(ae).get(C);
    d.get(C) !== ie &&
      (r.uniformBlockBinding(ae, ie, C.__bindingPointIndex), d.set(C, ie));
  }
  function Oe() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
      n === !0 &&
        (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (h = {}),
      (P = null),
      (U = {}),
      (m = {}),
      (b = new WeakMap()),
      (p = []),
      (l = null),
      (_ = !1),
      (M = null),
      (T = null),
      (w = null),
      (y = null),
      (A = null),
      (N = null),
      (x = null),
      (E = !1),
      (F = null),
      (X = null),
      (re = null),
      (O = null),
      (I = null),
      Z.set(0, 0, r.canvas.width, r.canvas.height),
      fe.set(0, 0, r.canvas.width, r.canvas.height),
      s.reset(),
      f.reset(),
      c.reset();
  }
  return {
    buffers: { color: s, depth: f, stencil: c },
    enable: De,
    disable: pe,
    bindFramebuffer: be,
    drawBuffers: oe,
    useProgram: Pe,
    setBlending: Xe,
    setMaterial: it,
    setFlipSided: Ke,
    setCullFace: yt,
    setLineWidth: Ye,
    setPolygonOffset: Re,
    setScissorTest: Lt,
    activeTexture: wt,
    bindTexture: S,
    unbindTexture: g,
    compressedTexImage2D: V,
    texImage2D: de,
    texImage3D: se,
    updateUBOMapping: ve,
    uniformBlockBinding: Ae,
    texStorage2D: _e,
    texStorage3D: z,
    texSubImage2D: K,
    texSubImage3D: Q,
    compressedTexSubImage2D: ne,
    scissor: le,
    viewport: ce,
    reset: Oe,
  };
}
function vu(r, e, t, n, i, a, o) {
  const s = i.isWebGL2,
    f = i.maxTextures,
    c = i.maxCubemapSize,
    d = i.maxTextureSize,
    u = i.maxSamples,
    h = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    b = new WeakMap();
  let p;
  const l = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function M(S, g) {
    return _ ? new OffscreenCanvas(S, g) : Ri("canvas");
  }
  function T(S, g, V, K) {
    let Q = 1;
    if (
      ((S.width > K || S.height > K) && (Q = K / Math.max(S.width, S.height)),
      Q < 1 || g === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && S instanceof ImageBitmap)
      ) {
        const ne = g ? Aa : Math.floor,
          _e = ne(Q * S.width),
          z = ne(Q * S.height);
        p === void 0 && (p = M(_e, z));
        const de = V ? M(_e, z) : p;
        return (
          (de.width = _e),
          (de.height = z),
          de.getContext("2d").drawImage(S, 0, 0, _e, z),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              _e +
              "x" +
              z +
              ")."
          ),
          de
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function w(S) {
    return ur(S.width) && ur(S.height);
  }
  function y(S) {
    return s
      ? !1
      : S.wrapS !== vt ||
          S.wrapT !== vt ||
          (S.minFilter !== tt && S.minFilter !== ut);
  }
  function A(S, g) {
    return S.generateMipmaps && g && S.minFilter !== tt && S.minFilter !== ut;
  }
  function N(S) {
    r.generateMipmap(S);
  }
  function x(S, g, V, K, Q = !1) {
    if (s === !1) return g;
    if (S !== null) {
      if (r[S] !== void 0) return r[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let ne = g;
    return (
      g === 6403 &&
        (V === 5126 && (ne = 33326),
        V === 5131 && (ne = 33325),
        V === 5121 && (ne = 33321)),
      g === 33319 &&
        (V === 5126 && (ne = 33328),
        V === 5131 && (ne = 33327),
        V === 5121 && (ne = 33323)),
      g === 6408 &&
        (V === 5126 && (ne = 34836),
        V === 5131 && (ne = 34842),
        V === 5121 && (ne = K === ze && Q === !1 ? 35907 : 32856),
        V === 32819 && (ne = 32854),
        V === 32820 && (ne = 32855)),
      (ne === 33325 ||
        ne === 33326 ||
        ne === 33327 ||
        ne === 33328 ||
        ne === 34842 ||
        ne === 34836) &&
        e.get("EXT_color_buffer_float"),
      ne
    );
  }
  function E(S, g, V) {
    return A(S, V) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== tt && S.minFilter !== ut)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? g.mipmaps.length
      : 1;
  }
  function F(S) {
    return S === tt || S === Ga || S === Va ? 9728 : 9729;
  }
  function X(S) {
    const g = S.target;
    g.removeEventListener("dispose", X), O(g), g.isVideoTexture && b.delete(g);
  }
  function re(S) {
    const g = S.target;
    g.removeEventListener("dispose", re), q(g);
  }
  function O(S) {
    const g = n.get(S);
    if (g.__webglInit === void 0) return;
    const V = S.source,
      K = l.get(V);
    if (K) {
      const Q = K[g.__cacheKey];
      Q.usedTimes--,
        Q.usedTimes === 0 && I(S),
        Object.keys(K).length === 0 && l.delete(V);
    }
    n.remove(S);
  }
  function I(S) {
    const g = n.get(S);
    r.deleteTexture(g.__webglTexture);
    const V = S.source,
      K = l.get(V);
    delete K[g.__cacheKey], o.memory.textures--;
  }
  function q(S) {
    const g = S.texture,
      V = n.get(S),
      K = n.get(g);
    if (
      (K.__webglTexture !== void 0 &&
        (r.deleteTexture(K.__webglTexture), o.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let Q = 0; Q < 6; Q++)
        r.deleteFramebuffer(V.__webglFramebuffer[Q]),
          V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer[Q]);
    else {
      if (
        (r.deleteFramebuffer(V.__webglFramebuffer),
        V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer),
        V.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(V.__webglMultisampledFramebuffer),
        V.__webglColorRenderbuffer)
      )
        for (let Q = 0; Q < V.__webglColorRenderbuffer.length; Q++)
          V.__webglColorRenderbuffer[Q] &&
            r.deleteRenderbuffer(V.__webglColorRenderbuffer[Q]);
      V.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let Q = 0, ne = g.length; Q < ne; Q++) {
        const _e = n.get(g[Q]);
        _e.__webglTexture &&
          (r.deleteTexture(_e.__webglTexture), o.memory.textures--),
          n.remove(g[Q]);
      }
    n.remove(g), n.remove(S);
  }
  let Y = 0;
  function j() {
    Y = 0;
  }
  function W() {
    const S = Y;
    return (
      S >= f &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            f
        ),
      (Y += 1),
      S
    );
  }
  function P(S) {
    const g = [];
    return (
      g.push(S.wrapS),
      g.push(S.wrapT),
      g.push(S.magFilter),
      g.push(S.minFilter),
      g.push(S.anisotropy),
      g.push(S.internalFormat),
      g.push(S.format),
      g.push(S.type),
      g.push(S.generateMipmaps),
      g.push(S.premultiplyAlpha),
      g.push(S.flipY),
      g.push(S.unpackAlignment),
      g.push(S.encoding),
      g.join()
    );
  }
  function U(S, g) {
    const V = n.get(S);
    if (
      (S.isVideoTexture && Lt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        V.__version !== S.version)
    ) {
      const K = S.image;
      if (K === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (K.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        pe(V, S, g);
        return;
      }
    }
    t.activeTexture(33984 + g), t.bindTexture(3553, V.__webglTexture);
  }
  function J(S, g) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      pe(V, S, g);
      return;
    }
    t.activeTexture(33984 + g), t.bindTexture(35866, V.__webglTexture);
  }
  function $(S, g) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      pe(V, S, g);
      return;
    }
    t.activeTexture(33984 + g), t.bindTexture(32879, V.__webglTexture);
  }
  function Z(S, g) {
    const V = n.get(S);
    if (S.version > 0 && V.__version !== S.version) {
      be(V, S, g);
      return;
    }
    t.activeTexture(33984 + g), t.bindTexture(34067, V.__webglTexture);
  }
  const fe = { [wa]: 10497, [vt]: 33071, [Ta]: 33648 },
    ge = {
      [tt]: 9728,
      [Ga]: 9984,
      [Va]: 9986,
      [ut]: 9729,
      [co]: 9985,
      [Ii]: 9987,
    };
  function H(S, g, V) {
    if (
      (V
        ? (r.texParameteri(S, 10242, fe[g.wrapS]),
          r.texParameteri(S, 10243, fe[g.wrapT]),
          (S === 32879 || S === 35866) &&
            r.texParameteri(S, 32882, fe[g.wrapR]),
          r.texParameteri(S, 10240, ge[g.magFilter]),
          r.texParameteri(S, 10241, ge[g.minFilter]))
        : (r.texParameteri(S, 10242, 33071),
          r.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && r.texParameteri(S, 32882, 33071),
          (g.wrapS !== vt || g.wrapT !== vt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(S, 10240, F(g.magFilter)),
          r.texParameteri(S, 10241, F(g.minFilter)),
          g.minFilter !== tt &&
            g.minFilter !== ut &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const K = e.get("EXT_texture_filter_anisotropic");
      if (
        (g.type === ln && e.has("OES_texture_float_linear") === !1) ||
        (s === !1 &&
          g.type === Kn &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (g.anisotropy > 1 || n.get(g).__currentAnisotropy) &&
        (r.texParameterf(
          S,
          K.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(g).__currentAnisotropy = g.anisotropy));
    }
  }
  function De(S, g) {
    let V = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), g.addEventListener("dispose", X));
    const K = g.source;
    let Q = l.get(K);
    Q === void 0 && ((Q = {}), l.set(K, Q));
    const ne = P(g);
    if (ne !== S.__cacheKey) {
      Q[ne] === void 0 &&
        ((Q[ne] = { texture: r.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (V = !0)),
        Q[ne].usedTimes++;
      const _e = Q[S.__cacheKey];
      _e !== void 0 &&
        (Q[S.__cacheKey].usedTimes--, _e.usedTimes === 0 && I(g)),
        (S.__cacheKey = ne),
        (S.__webglTexture = Q[ne].texture);
    }
    return V;
  }
  function pe(S, g, V) {
    let K = 3553;
    g.isDataArrayTexture && (K = 35866), g.isData3DTexture && (K = 32879);
    const Q = De(S, g),
      ne = g.source;
    if (
      (t.activeTexture(33984 + V),
      t.bindTexture(K, S.__webglTexture),
      ne.version !== ne.__currentVersion || Q === !0)
    ) {
      r.pixelStorei(37440, g.flipY),
        r.pixelStorei(37441, g.premultiplyAlpha),
        r.pixelStorei(3317, g.unpackAlignment),
        r.pixelStorei(37443, 0);
      const _e = y(g) && w(g.image) === !1;
      let z = T(g.image, _e, !1, d);
      z = wt(g, z);
      const de = w(z) || s,
        se = a.convert(g.format, g.encoding);
      let le = a.convert(g.type),
        ce = x(g.internalFormat, se, le, g.encoding, g.isVideoTexture);
      H(K, g, de);
      let ve;
      const Ae = g.mipmaps,
        Oe = s && g.isVideoTexture !== !0,
        C = ne.__currentVersion === void 0 || Q === !0,
        ae = E(g, z, de);
      if (g.isDepthTexture)
        (ce = 6402),
          s
            ? g.type === ln
              ? (ce = 36012)
              : g.type === fn
              ? (ce = 33190)
              : g.type === zn
              ? (ce = 35056)
              : (ce = 33189)
            : g.type === ln &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          g.format === un &&
            ce === 6402 &&
            g.type !== is &&
            g.type !== fn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (g.type = fn),
            (le = a.convert(g.type))),
          g.format === Vn &&
            ce === 6402 &&
            ((ce = 34041),
            g.type !== zn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (g.type = zn),
              (le = a.convert(g.type)))),
          C &&
            (Oe
              ? t.texStorage2D(3553, 1, ce, z.width, z.height)
              : t.texImage2D(3553, 0, ce, z.width, z.height, 0, se, le, null));
      else if (g.isDataTexture)
        if (Ae.length > 0 && de) {
          Oe && C && t.texStorage2D(3553, ae, ce, Ae[0].width, Ae[0].height);
          for (let B = 0, ie = Ae.length; B < ie; B++)
            (ve = Ae[B]),
              Oe
                ? t.texSubImage2D(
                    3553,
                    B,
                    0,
                    0,
                    ve.width,
                    ve.height,
                    se,
                    le,
                    ve.data
                  )
                : t.texImage2D(
                    3553,
                    B,
                    ce,
                    ve.width,
                    ve.height,
                    0,
                    se,
                    le,
                    ve.data
                  );
          g.generateMipmaps = !1;
        } else
          Oe
            ? (C && t.texStorage2D(3553, ae, ce, z.width, z.height),
              t.texSubImage2D(3553, 0, 0, 0, z.width, z.height, se, le, z.data))
            : t.texImage2D(3553, 0, ce, z.width, z.height, 0, se, le, z.data);
      else if (g.isCompressedTexture) {
        Oe && C && t.texStorage2D(3553, ae, ce, Ae[0].width, Ae[0].height);
        for (let B = 0, ie = Ae.length; B < ie; B++)
          (ve = Ae[B]),
            g.format !== At
              ? se !== null
                ? Oe
                  ? t.compressedTexSubImage2D(
                      3553,
                      B,
                      0,
                      0,
                      ve.width,
                      ve.height,
                      se,
                      ve.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      B,
                      ce,
                      ve.width,
                      ve.height,
                      0,
                      ve.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : Oe
              ? t.texSubImage2D(
                  3553,
                  B,
                  0,
                  0,
                  ve.width,
                  ve.height,
                  se,
                  le,
                  ve.data
                )
              : t.texImage2D(
                  3553,
                  B,
                  ce,
                  ve.width,
                  ve.height,
                  0,
                  se,
                  le,
                  ve.data
                );
      } else if (g.isDataArrayTexture)
        Oe
          ? (C && t.texStorage3D(35866, ae, ce, z.width, z.height, z.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              se,
              le,
              z.data
            ))
          : t.texImage3D(
              35866,
              0,
              ce,
              z.width,
              z.height,
              z.depth,
              0,
              se,
              le,
              z.data
            );
      else if (g.isData3DTexture)
        Oe
          ? (C && t.texStorage3D(32879, ae, ce, z.width, z.height, z.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              se,
              le,
              z.data
            ))
          : t.texImage3D(
              32879,
              0,
              ce,
              z.width,
              z.height,
              z.depth,
              0,
              se,
              le,
              z.data
            );
      else if (g.isFramebufferTexture) {
        if (C)
          if (Oe) t.texStorage2D(3553, ae, ce, z.width, z.height);
          else {
            let B = z.width,
              ie = z.height;
            for (let te = 0; te < ae; te++)
              t.texImage2D(3553, te, ce, B, ie, 0, se, le, null),
                (B >>= 1),
                (ie >>= 1);
          }
      } else if (Ae.length > 0 && de) {
        Oe && C && t.texStorage2D(3553, ae, ce, Ae[0].width, Ae[0].height);
        for (let B = 0, ie = Ae.length; B < ie; B++)
          (ve = Ae[B]),
            Oe
              ? t.texSubImage2D(3553, B, 0, 0, se, le, ve)
              : t.texImage2D(3553, B, ce, se, le, ve);
        g.generateMipmaps = !1;
      } else
        Oe
          ? (C && t.texStorage2D(3553, ae, ce, z.width, z.height),
            t.texSubImage2D(3553, 0, 0, 0, se, le, z))
          : t.texImage2D(3553, 0, ce, se, le, z);
      A(g, de) && N(K),
        (ne.__currentVersion = ne.version),
        g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function be(S, g, V) {
    if (g.image.length !== 6) return;
    const K = De(S, g),
      Q = g.source;
    if (
      (t.activeTexture(33984 + V),
      t.bindTexture(34067, S.__webglTexture),
      Q.version !== Q.__currentVersion || K === !0)
    ) {
      r.pixelStorei(37440, g.flipY),
        r.pixelStorei(37441, g.premultiplyAlpha),
        r.pixelStorei(3317, g.unpackAlignment),
        r.pixelStorei(37443, 0);
      const ne = g.isCompressedTexture || g.image[0].isCompressedTexture,
        _e = g.image[0] && g.image[0].isDataTexture,
        z = [];
      for (let B = 0; B < 6; B++)
        !ne && !_e
          ? (z[B] = T(g.image[B], !1, !0, c))
          : (z[B] = _e ? g.image[B].image : g.image[B]),
          (z[B] = wt(g, z[B]));
      const de = z[0],
        se = w(de) || s,
        le = a.convert(g.format, g.encoding),
        ce = a.convert(g.type),
        ve = x(g.internalFormat, le, ce, g.encoding),
        Ae = s && g.isVideoTexture !== !0,
        Oe = Q.__currentVersion === void 0 || K === !0;
      let C = E(g, de, se);
      H(34067, g, se);
      let ae;
      if (ne) {
        Ae && Oe && t.texStorage2D(34067, C, ve, de.width, de.height);
        for (let B = 0; B < 6; B++) {
          ae = z[B].mipmaps;
          for (let ie = 0; ie < ae.length; ie++) {
            const te = ae[ie];
            g.format !== At
              ? le !== null
                ? Ae
                  ? t.compressedTexSubImage2D(
                      34069 + B,
                      ie,
                      0,
                      0,
                      te.width,
                      te.height,
                      le,
                      te.data
                    )
                  : t.compressedTexImage2D(
                      34069 + B,
                      ie,
                      ve,
                      te.width,
                      te.height,
                      0,
                      te.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Ae
              ? t.texSubImage2D(
                  34069 + B,
                  ie,
                  0,
                  0,
                  te.width,
                  te.height,
                  le,
                  ce,
                  te.data
                )
              : t.texImage2D(
                  34069 + B,
                  ie,
                  ve,
                  te.width,
                  te.height,
                  0,
                  le,
                  ce,
                  te.data
                );
          }
        }
      } else {
        (ae = g.mipmaps),
          Ae &&
            Oe &&
            (ae.length > 0 && C++,
            t.texStorage2D(34067, C, ve, z[0].width, z[0].height));
        for (let B = 0; B < 6; B++)
          if (_e) {
            Ae
              ? t.texSubImage2D(
                  34069 + B,
                  0,
                  0,
                  0,
                  z[B].width,
                  z[B].height,
                  le,
                  ce,
                  z[B].data
                )
              : t.texImage2D(
                  34069 + B,
                  0,
                  ve,
                  z[B].width,
                  z[B].height,
                  0,
                  le,
                  ce,
                  z[B].data
                );
            for (let ie = 0; ie < ae.length; ie++) {
              const Ee = ae[ie].image[B].image;
              Ae
                ? t.texSubImage2D(
                    34069 + B,
                    ie + 1,
                    0,
                    0,
                    Ee.width,
                    Ee.height,
                    le,
                    ce,
                    Ee.data
                  )
                : t.texImage2D(
                    34069 + B,
                    ie + 1,
                    ve,
                    Ee.width,
                    Ee.height,
                    0,
                    le,
                    ce,
                    Ee.data
                  );
            }
          } else {
            Ae
              ? t.texSubImage2D(34069 + B, 0, 0, 0, le, ce, z[B])
              : t.texImage2D(34069 + B, 0, ve, le, ce, z[B]);
            for (let ie = 0; ie < ae.length; ie++) {
              const te = ae[ie];
              Ae
                ? t.texSubImage2D(34069 + B, ie + 1, 0, 0, le, ce, te.image[B])
                : t.texImage2D(34069 + B, ie + 1, ve, le, ce, te.image[B]);
            }
          }
      }
      A(g, se) && N(34067),
        (Q.__currentVersion = Q.version),
        g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function oe(S, g, V, K, Q) {
    const ne = a.convert(V.format, V.encoding),
      _e = a.convert(V.type),
      z = x(V.internalFormat, ne, _e, V.encoding);
    n.get(g).__hasExternalTextures ||
      (Q === 32879 || Q === 35866
        ? t.texImage3D(Q, 0, z, g.width, g.height, g.depth, 0, ne, _e, null)
        : t.texImage2D(Q, 0, z, g.width, g.height, 0, ne, _e, null)),
      t.bindFramebuffer(36160, S),
      Re(g)
        ? h.framebufferTexture2DMultisampleEXT(
            36160,
            K,
            Q,
            n.get(V).__webglTexture,
            0,
            Ye(g)
          )
        : r.framebufferTexture2D(36160, K, Q, n.get(V).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Pe(S, g, V) {
    if ((r.bindRenderbuffer(36161, S), g.depthBuffer && !g.stencilBuffer)) {
      let K = 33189;
      if (V || Re(g)) {
        const Q = g.depthTexture;
        Q &&
          Q.isDepthTexture &&
          (Q.type === ln ? (K = 36012) : Q.type === fn && (K = 33190));
        const ne = Ye(g);
        Re(g)
          ? h.renderbufferStorageMultisampleEXT(36161, ne, K, g.width, g.height)
          : r.renderbufferStorageMultisample(36161, ne, K, g.width, g.height);
      } else r.renderbufferStorage(36161, K, g.width, g.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (g.depthBuffer && g.stencilBuffer) {
      const K = Ye(g);
      V && Re(g) === !1
        ? r.renderbufferStorageMultisample(36161, K, 35056, g.width, g.height)
        : Re(g)
        ? h.renderbufferStorageMultisampleEXT(
            36161,
            K,
            35056,
            g.width,
            g.height
          )
        : r.renderbufferStorage(36161, 34041, g.width, g.height),
        r.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const K = g.isWebGLMultipleRenderTargets === !0 ? g.texture : [g.texture];
      for (let Q = 0; Q < K.length; Q++) {
        const ne = K[Q],
          _e = a.convert(ne.format, ne.encoding),
          z = a.convert(ne.type),
          de = x(ne.internalFormat, _e, z, ne.encoding),
          se = Ye(g);
        V && Re(g) === !1
          ? r.renderbufferStorageMultisample(36161, se, de, g.width, g.height)
          : Re(g)
          ? h.renderbufferStorageMultisampleEXT(
              36161,
              se,
              de,
              g.width,
              g.height
            )
          : r.renderbufferStorage(36161, de, g.width, g.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function Se(S, g) {
    if (g && g.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, S),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(g.depthTexture).__webglTexture ||
      g.depthTexture.image.width !== g.width ||
      g.depthTexture.image.height !== g.height) &&
      ((g.depthTexture.image.width = g.width),
      (g.depthTexture.image.height = g.height),
      (g.depthTexture.needsUpdate = !0)),
      U(g.depthTexture, 0);
    const K = n.get(g.depthTexture).__webglTexture,
      Q = Ye(g);
    if (g.depthTexture.format === un)
      Re(g)
        ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, K, 0, Q)
        : r.framebufferTexture2D(36160, 36096, 3553, K, 0);
    else if (g.depthTexture.format === Vn)
      Re(g)
        ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, K, 0, Q)
        : r.framebufferTexture2D(36160, 33306, 3553, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function he(S) {
    const g = n.get(S),
      V = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Se(g.__webglFramebuffer, S);
    } else if (V) {
      g.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(36160, g.__webglFramebuffer[K]),
          (g.__webglDepthbuffer[K] = r.createRenderbuffer()),
          Pe(g.__webglDepthbuffer[K], S, !1);
    } else
      t.bindFramebuffer(36160, g.__webglFramebuffer),
        (g.__webglDepthbuffer = r.createRenderbuffer()),
        Pe(g.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function Xe(S, g, V) {
    const K = n.get(S);
    g !== void 0 && oe(K.__webglFramebuffer, S, S.texture, 36064, 3553),
      V !== void 0 && he(S);
  }
  function it(S) {
    const g = S.texture,
      V = n.get(S),
      K = n.get(g);
    S.addEventListener("dispose", re),
      S.isWebGLMultipleRenderTargets !== !0 &&
        (K.__webglTexture === void 0 && (K.__webglTexture = r.createTexture()),
        (K.__version = g.version),
        o.memory.textures++);
    const Q = S.isWebGLCubeRenderTarget === !0,
      ne = S.isWebGLMultipleRenderTargets === !0,
      _e = w(S) || s;
    if (Q) {
      V.__webglFramebuffer = [];
      for (let z = 0; z < 6; z++)
        V.__webglFramebuffer[z] = r.createFramebuffer();
    } else {
      if (((V.__webglFramebuffer = r.createFramebuffer()), ne))
        if (i.drawBuffers) {
          const z = S.texture;
          for (let de = 0, se = z.length; de < se; de++) {
            const le = n.get(z[de]);
            le.__webglTexture === void 0 &&
              ((le.__webglTexture = r.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (s && S.samples > 0 && Re(S) === !1) {
        const z = ne ? g : [g];
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer);
        for (let de = 0; de < z.length; de++) {
          const se = z[de];
          (V.__webglColorRenderbuffer[de] = r.createRenderbuffer()),
            r.bindRenderbuffer(36161, V.__webglColorRenderbuffer[de]);
          const le = a.convert(se.format, se.encoding),
            ce = a.convert(se.type),
            ve = x(se.internalFormat, le, ce, se.encoding),
            Ae = Ye(S);
          r.renderbufferStorageMultisample(36161, Ae, ve, S.width, S.height),
            r.framebufferRenderbuffer(
              36160,
              36064 + de,
              36161,
              V.__webglColorRenderbuffer[de]
            );
        }
        r.bindRenderbuffer(36161, null),
          S.depthBuffer &&
            ((V.__webglDepthRenderbuffer = r.createRenderbuffer()),
            Pe(V.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (Q) {
      t.bindTexture(34067, K.__webglTexture), H(34067, g, _e);
      for (let z = 0; z < 6; z++)
        oe(V.__webglFramebuffer[z], S, g, 36064, 34069 + z);
      A(g, _e) && N(34067), t.unbindTexture();
    } else if (ne) {
      const z = S.texture;
      for (let de = 0, se = z.length; de < se; de++) {
        const le = z[de],
          ce = n.get(le);
        t.bindTexture(3553, ce.__webglTexture),
          H(3553, le, _e),
          oe(V.__webglFramebuffer, S, le, 36064 + de, 3553),
          A(le, _e) && N(3553);
      }
      t.unbindTexture();
    } else {
      let z = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (s
          ? (z = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(z, K.__webglTexture),
        H(z, g, _e),
        oe(V.__webglFramebuffer, S, g, 36064, z),
        A(g, _e) && N(z),
        t.unbindTexture();
    }
    S.depthBuffer && he(S);
  }
  function Ke(S) {
    const g = w(S) || s,
      V = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let K = 0, Q = V.length; K < Q; K++) {
      const ne = V[K];
      if (A(ne, g)) {
        const _e = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          z = n.get(ne).__webglTexture;
        t.bindTexture(_e, z), N(_e), t.unbindTexture();
      }
    }
  }
  function yt(S) {
    if (s && S.samples > 0 && Re(S) === !1) {
      const g = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture],
        V = S.width,
        K = S.height;
      let Q = 16384;
      const ne = [],
        _e = S.stencilBuffer ? 33306 : 36096,
        z = n.get(S),
        de = S.isWebGLMultipleRenderTargets === !0;
      if (de)
        for (let se = 0; se < g.length; se++)
          t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + se, 36161, null),
            t.bindFramebuffer(36160, z.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + se, 3553, null, 0);
      t.bindFramebuffer(36008, z.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, z.__webglFramebuffer);
      for (let se = 0; se < g.length; se++) {
        ne.push(36064 + se), S.depthBuffer && ne.push(_e);
        const le =
          z.__ignoreDepthValues !== void 0 ? z.__ignoreDepthValues : !1;
        if (
          (le === !1 &&
            (S.depthBuffer && (Q |= 256), S.stencilBuffer && (Q |= 1024)),
          de &&
            r.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              z.__webglColorRenderbuffer[se]
            ),
          le === !0 &&
            (r.invalidateFramebuffer(36008, [_e]),
            r.invalidateFramebuffer(36009, [_e])),
          de)
        ) {
          const ce = n.get(g[se]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, ce, 0);
        }
        r.blitFramebuffer(0, 0, V, K, 0, 0, V, K, Q, 9728),
          m && r.invalidateFramebuffer(36008, ne);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), de))
        for (let se = 0; se < g.length; se++) {
          t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              36160,
              36064 + se,
              36161,
              z.__webglColorRenderbuffer[se]
            );
          const le = n.get(g[se]).__webglTexture;
          t.bindFramebuffer(36160, z.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + se, 3553, le, 0);
        }
      t.bindFramebuffer(36009, z.__webglMultisampledFramebuffer);
    }
  }
  function Ye(S) {
    return Math.min(u, S.samples);
  }
  function Re(S) {
    const g = n.get(S);
    return (
      s &&
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function Lt(S) {
    const g = o.render.frame;
    b.get(S) !== g && (b.set(S, g), S.update());
  }
  function wt(S, g) {
    const V = S.encoding,
      K = S.format,
      Q = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === Ea ||
        (V !== mn &&
          (V === ze
            ? s === !1
              ? e.has("EXT_sRGB") === !0 && K === At
                ? ((S.format = Ea),
                  (S.minFilter = ut),
                  (S.generateMipmaps = !1))
                : (g = ss.sRGBToLinear(g))
              : (K !== At || Q !== pn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                V
              ))),
      g
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = j),
    (this.setTexture2D = U),
    (this.setTexture2DArray = J),
    (this.setTexture3D = $),
    (this.setTextureCube = Z),
    (this.rebindTextures = Xe),
    (this.setupRenderTarget = it),
    (this.updateRenderTargetMipmap = Ke),
    (this.updateMultisampleRenderTarget = yt),
    (this.setupDepthRenderbuffer = he),
    (this.setupFrameBufferTexture = oe),
    (this.useMultisampledRTT = Re);
}
function Mu(r, e, t) {
  const n = t.isWebGL2;
  function i(a, o = null) {
    let s;
    if (a === pn) return 5121;
    if (a === ho) return 32819;
    if (a === po) return 32820;
    if (a === fo) return 5120;
    if (a === lo) return 5122;
    if (a === is) return 5123;
    if (a === uo) return 5124;
    if (a === fn) return 5125;
    if (a === ln) return 5126;
    if (a === Kn)
      return n
        ? 5131
        : ((s = e.get("OES_texture_half_float")),
          s !== null ? s.HALF_FLOAT_OES : null);
    if (a === mo) return 6406;
    if (a === At) return 6408;
    if (a === bo) return 6409;
    if (a === _o) return 6410;
    if (a === un) return 6402;
    if (a === Vn) return 34041;
    if (a === xo) return 6403;
    if (a === go)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (a === Ea)
      return (s = e.get("EXT_sRGB")), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (a === vo) return 36244;
    if (a === Mo) return 33319;
    if (a === So) return 33320;
    if (a === yo) return 36249;
    if (a === Vi || a === ki || a === Wi || a === Hi)
      if (o === ze)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (a === Vi) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (a === ki) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (a === Wi) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (a === Hi) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (a === Vi) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === ki) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === Wi) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === Hi) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (a === ka || a === Wa || a === Ha || a === qa)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (a === ka) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === Wa) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === Ha) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === qa) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (a === wo)
      return (
        (s = e.get("WEBGL_compressed_texture_etc1")),
        s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (a === Xa || a === Ya)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (a === Xa)
          return o === ze ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (a === Ya)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      a === ja ||
      a === Za ||
      a === $a ||
      a === Ka ||
      a === Ja ||
      a === Qa ||
      a === er ||
      a === tr ||
      a === nr ||
      a === ir ||
      a === ar ||
      a === rr ||
      a === sr ||
      a === or
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (a === ja)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (a === Za)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (a === $a)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (a === Ka)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (a === Ja)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (a === Qa)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (a === er)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (a === tr)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (a === nr)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (a === ir)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (a === ar)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (a === rr)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (a === sr)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (a === or)
          return o === ze
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (a === cr)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (a === cr)
          return o === ze
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return a === zn
      ? n
        ? 34042
        : ((s = e.get("WEBGL_depth_texture")),
          s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null)
      : r[a] !== void 0
      ? r[a]
      : null;
  }
  return { convert: i };
}
class Su extends ht {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ai extends nt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const yu = { type: "move" };
class _a {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ai()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ai()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new D()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new D())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ai()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new D()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new D())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      a = null,
      o = null;
    const s = this._targetRay,
      f = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const l = t.getJointPose(p, n);
          if (c.joints[p.jointName] === void 0) {
            const M = new Ai();
            (M.matrixAutoUpdate = !1),
              (M.visible = !1),
              (c.joints[p.jointName] = M),
              c.add(M);
          }
          const _ = c.joints[p.jointName];
          l !== null &&
            (_.matrix.fromArray(l.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = l.radius)),
            (_.visible = l !== null);
        }
        const d = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          h = d.position.distanceTo(u.position),
          m = 0.02,
          b = 0.005;
        c.inputState.pinching && h > m + b
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= m - b &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        f !== null &&
          e.gripSpace &&
          ((a = t.getPose(e.gripSpace, n)),
          a !== null &&
            (f.matrix.fromArray(a.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            a.linearVelocity
              ? ((f.hasLinearVelocity = !0),
                f.linearVelocity.copy(a.linearVelocity))
              : (f.hasLinearVelocity = !1),
            a.angularVelocity
              ? ((f.hasAngularVelocity = !0),
                f.angularVelocity.copy(a.angularVelocity))
              : (f.hasAngularVelocity = !1)));
      s !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && a !== null && (i = a),
        i !== null &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(yu)));
    }
    return (
      s !== null && (s.visible = i !== null),
      f !== null && (f.visible = a !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class wu extends St {
  constructor(e, t, n, i, a, o, s, f, c, d) {
    if (((d = d !== void 0 ? d : un), d !== un && d !== Vn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && d === un && (n = fn),
      n === void 0 && d === Vn && (n = zn),
      super(null, i, a, o, s, f, d, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = s !== void 0 ? s : tt),
      (this.minFilter = f !== void 0 ? f : tt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Tu extends Wn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      a = 1,
      o = null,
      s = "local-floor",
      f = null,
      c = null,
      d = null,
      u = null,
      h = null,
      m = null;
    const b = t.getContextAttributes();
    let p = null,
      l = null;
    const _ = [],
      M = [],
      T = new ht();
    T.layers.enable(1), (T.viewport = new je());
    const w = new ht();
    w.layers.enable(2), (w.viewport = new je());
    const y = [T, w],
      A = new Su();
    A.layers.enable(1), A.layers.enable(2);
    let N = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (P) {
        let U = _[P];
        return (
          U === void 0 && ((U = new _a()), (_[P] = U)), U.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (P) {
        let U = _[P];
        return U === void 0 && ((U = new _a()), (_[P] = U)), U.getGripSpace();
      }),
      (this.getHand = function (P) {
        let U = _[P];
        return U === void 0 && ((U = new _a()), (_[P] = U)), U.getHandSpace();
      });
    function E(P) {
      const U = M.indexOf(P.inputSource);
      if (U === -1) return;
      const J = _[U];
      J !== void 0 && J.dispatchEvent({ type: P.type, data: P.inputSource });
    }
    function F() {
      i.removeEventListener("select", E),
        i.removeEventListener("selectstart", E),
        i.removeEventListener("selectend", E),
        i.removeEventListener("squeeze", E),
        i.removeEventListener("squeezestart", E),
        i.removeEventListener("squeezeend", E),
        i.removeEventListener("end", F),
        i.removeEventListener("inputsourceschange", X);
      for (let P = 0; P < _.length; P++) {
        const U = M[P];
        U !== null && ((M[P] = null), _[P].disconnect(U));
      }
      (N = null),
        (x = null),
        e.setRenderTarget(p),
        (h = null),
        (u = null),
        (d = null),
        (i = null),
        (l = null),
        W.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (P) {
      (a = P),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (P) {
        (s = P),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return f || o;
      }),
      (this.setReferenceSpace = function (P) {
        f = P;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : h;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (P) {
        if (((i = P), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", E),
            i.addEventListener("selectstart", E),
            i.addEventListener("selectend", E),
            i.addEventListener("squeeze", E),
            i.addEventListener("squeezestart", E),
            i.addEventListener("squeezeend", E),
            i.addEventListener("end", F),
            i.addEventListener("inputsourceschange", X),
            b.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const U = {
              antialias: i.renderState.layers === void 0 ? b.antialias : !0,
              alpha: b.alpha,
              depth: b.depth,
              stencil: b.stencil,
              framebufferScaleFactor: a,
            };
            (h = new XRWebGLLayer(i, t, U)),
              i.updateRenderState({ baseLayer: h }),
              (l = new gn(h.framebufferWidth, h.framebufferHeight, {
                format: At,
                type: pn,
                encoding: e.outputEncoding,
                stencilBuffer: b.stencil,
              }));
          } else {
            let U = null,
              J = null,
              $ = null;
            b.depth &&
              (($ = b.stencil ? 35056 : 33190),
              (U = b.stencil ? Vn : un),
              (J = b.stencil ? zn : fn));
            const Z = { colorFormat: 32856, depthFormat: $, scaleFactor: a };
            (d = new XRWebGLBinding(i, t)),
              (u = d.createProjectionLayer(Z)),
              i.updateRenderState({ layers: [u] }),
              (l = new gn(u.textureWidth, u.textureHeight, {
                format: At,
                type: pn,
                depthTexture: new wu(
                  u.textureWidth,
                  u.textureHeight,
                  J,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  U
                ),
                stencilBuffer: b.stencil,
                encoding: e.outputEncoding,
                samples: b.antialias ? 4 : 0,
              }));
            const fe = e.properties.get(l);
            fe.__ignoreDepthValues = u.ignoreDepthValues;
          }
          (l.isXRRenderTarget = !0),
            this.setFoveation(1),
            (f = null),
            (o = await i.requestReferenceSpace(s)),
            W.setContext(i),
            W.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function X(P) {
      for (let U = 0; U < P.removed.length; U++) {
        const J = P.removed[U],
          $ = M.indexOf(J);
        $ >= 0 &&
          ((M[$] = null),
          _[$].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let U = 0; U < P.added.length; U++) {
        const J = P.added[U];
        let $ = M.indexOf(J);
        if ($ === -1) {
          for (let fe = 0; fe < _.length; fe++)
            if (fe >= M.length) {
              M.push(J), ($ = fe);
              break;
            } else if (M[fe] === null) {
              (M[fe] = J), ($ = fe);
              break;
            }
          if ($ === -1) break;
        }
        const Z = _[$];
        Z && Z.dispatchEvent({ type: "connected", data: J });
      }
    }
    const re = new D(),
      O = new D();
    function I(P, U, J) {
      re.setFromMatrixPosition(U.matrixWorld),
        O.setFromMatrixPosition(J.matrixWorld);
      const $ = re.distanceTo(O),
        Z = U.projectionMatrix.elements,
        fe = J.projectionMatrix.elements,
        ge = Z[14] / (Z[10] - 1),
        H = Z[14] / (Z[10] + 1),
        De = (Z[9] + 1) / Z[5],
        pe = (Z[9] - 1) / Z[5],
        be = (Z[8] - 1) / Z[0],
        oe = (fe[8] + 1) / fe[0],
        Pe = ge * be,
        Se = ge * oe,
        he = $ / (-be + oe),
        Xe = he * -be;
      U.matrixWorld.decompose(P.position, P.quaternion, P.scale),
        P.translateX(Xe),
        P.translateZ(he),
        P.matrixWorld.compose(P.position, P.quaternion, P.scale),
        P.matrixWorldInverse.copy(P.matrixWorld).invert();
      const it = ge + he,
        Ke = H + he,
        yt = Pe - Xe,
        Ye = Se + ($ - Xe),
        Re = ((De * H) / Ke) * it,
        Lt = ((pe * H) / Ke) * it;
      P.projectionMatrix.makePerspective(yt, Ye, Re, Lt, it, Ke);
    }
    function q(P, U) {
      U === null
        ? P.matrixWorld.copy(P.matrix)
        : P.matrixWorld.multiplyMatrices(U.matrixWorld, P.matrix),
        P.matrixWorldInverse.copy(P.matrixWorld).invert();
    }
    (this.updateCamera = function (P) {
      if (i === null) return;
      (A.near = w.near = T.near = P.near),
        (A.far = w.far = T.far = P.far),
        (N !== A.near || x !== A.far) &&
          (i.updateRenderState({ depthNear: A.near, depthFar: A.far }),
          (N = A.near),
          (x = A.far));
      const U = P.parent,
        J = A.cameras;
      q(A, U);
      for (let Z = 0; Z < J.length; Z++) q(J[Z], U);
      A.matrixWorld.decompose(A.position, A.quaternion, A.scale),
        P.matrix.copy(A.matrix),
        P.matrix.decompose(P.position, P.quaternion, P.scale);
      const $ = P.children;
      for (let Z = 0, fe = $.length; Z < fe; Z++) $[Z].updateMatrixWorld(!0);
      J.length === 2 ? I(A, T, w) : A.projectionMatrix.copy(T.projectionMatrix);
    }),
      (this.getCamera = function () {
        return A;
      }),
      (this.getFoveation = function () {
        if (u !== null) return u.fixedFoveation;
        if (h !== null) return h.fixedFoveation;
      }),
      (this.setFoveation = function (P) {
        u !== null && (u.fixedFoveation = P),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = P);
      });
    let Y = null;
    function j(P, U) {
      if (((c = U.getViewerPose(f || o)), (m = U), c !== null)) {
        const J = c.views;
        h !== null &&
          (e.setRenderTargetFramebuffer(l, h.framebuffer),
          e.setRenderTarget(l));
        let $ = !1;
        J.length !== A.cameras.length && ((A.cameras.length = 0), ($ = !0));
        for (let Z = 0; Z < J.length; Z++) {
          const fe = J[Z];
          let ge = null;
          if (h !== null) ge = h.getViewport(fe);
          else {
            const De = d.getViewSubImage(u, fe);
            (ge = De.viewport),
              Z === 0 &&
                (e.setRenderTargetTextures(
                  l,
                  De.colorTexture,
                  u.ignoreDepthValues ? void 0 : De.depthStencilTexture
                ),
                e.setRenderTarget(l));
          }
          let H = y[Z];
          H === void 0 &&
            ((H = new ht()),
            H.layers.enable(Z),
            (H.viewport = new je()),
            (y[Z] = H)),
            H.matrix.fromArray(fe.transform.matrix),
            H.projectionMatrix.fromArray(fe.projectionMatrix),
            H.viewport.set(ge.x, ge.y, ge.width, ge.height),
            Z === 0 && A.matrix.copy(H.matrix),
            $ === !0 && A.cameras.push(H);
        }
      }
      for (let J = 0; J < _.length; J++) {
        const $ = M[J],
          Z = _[J];
        $ !== null && Z !== void 0 && Z.update($, U, f || o);
      }
      Y && Y(P, U), (m = null);
    }
    const W = new bs();
    W.setAnimationLoop(j),
      (this.setAnimationLoop = function (P) {
        Y = P;
      }),
      (this.dispose = function () {});
  }
}
function Eu(r, e) {
  function t(p, l) {
    p.fogColor.value.copy(l.color),
      l.isFog
        ? ((p.fogNear.value = l.near), (p.fogFar.value = l.far))
        : l.isFogExp2 && (p.fogDensity.value = l.density);
  }
  function n(p, l, _, M, T) {
    l.isMeshBasicMaterial || l.isMeshLambertMaterial
      ? i(p, l)
      : l.isMeshToonMaterial
      ? (i(p, l), d(p, l))
      : l.isMeshPhongMaterial
      ? (i(p, l), c(p, l))
      : l.isMeshStandardMaterial
      ? (i(p, l), u(p, l), l.isMeshPhysicalMaterial && h(p, l, T))
      : l.isMeshMatcapMaterial
      ? (i(p, l), m(p, l))
      : l.isMeshDepthMaterial
      ? i(p, l)
      : l.isMeshDistanceMaterial
      ? (i(p, l), b(p, l))
      : l.isMeshNormalMaterial
      ? i(p, l)
      : l.isLineBasicMaterial
      ? (a(p, l), l.isLineDashedMaterial && o(p, l))
      : l.isPointsMaterial
      ? s(p, l, _, M)
      : l.isSpriteMaterial
      ? f(p, l)
      : l.isShadowMaterial
      ? (p.color.value.copy(l.color), (p.opacity.value = l.opacity))
      : l.isShaderMaterial && (l.uniformsNeedUpdate = !1);
  }
  function i(p, l) {
    (p.opacity.value = l.opacity),
      l.color && p.diffuse.value.copy(l.color),
      l.emissive &&
        p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),
      l.map && (p.map.value = l.map),
      l.alphaMap && (p.alphaMap.value = l.alphaMap),
      l.bumpMap &&
        ((p.bumpMap.value = l.bumpMap),
        (p.bumpScale.value = l.bumpScale),
        l.side === mt && (p.bumpScale.value *= -1)),
      l.displacementMap &&
        ((p.displacementMap.value = l.displacementMap),
        (p.displacementScale.value = l.displacementScale),
        (p.displacementBias.value = l.displacementBias)),
      l.emissiveMap && (p.emissiveMap.value = l.emissiveMap),
      l.normalMap &&
        ((p.normalMap.value = l.normalMap),
        p.normalScale.value.copy(l.normalScale),
        l.side === mt && p.normalScale.value.negate()),
      l.specularMap && (p.specularMap.value = l.specularMap),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
    const _ = e.get(l).envMap;
    if (
      (_ &&
        ((p.envMap.value = _),
        (p.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = l.reflectivity),
        (p.ior.value = l.ior),
        (p.refractionRatio.value = l.refractionRatio)),
      l.lightMap)
    ) {
      p.lightMap.value = l.lightMap;
      const w = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = l.lightMapIntensity * w;
    }
    l.aoMap &&
      ((p.aoMap.value = l.aoMap), (p.aoMapIntensity.value = l.aoMapIntensity));
    let M;
    l.map
      ? (M = l.map)
      : l.specularMap
      ? (M = l.specularMap)
      : l.displacementMap
      ? (M = l.displacementMap)
      : l.normalMap
      ? (M = l.normalMap)
      : l.bumpMap
      ? (M = l.bumpMap)
      : l.roughnessMap
      ? (M = l.roughnessMap)
      : l.metalnessMap
      ? (M = l.metalnessMap)
      : l.alphaMap
      ? (M = l.alphaMap)
      : l.emissiveMap
      ? (M = l.emissiveMap)
      : l.clearcoatMap
      ? (M = l.clearcoatMap)
      : l.clearcoatNormalMap
      ? (M = l.clearcoatNormalMap)
      : l.clearcoatRoughnessMap
      ? (M = l.clearcoatRoughnessMap)
      : l.iridescenceMap
      ? (M = l.iridescenceMap)
      : l.iridescenceThicknessMap
      ? (M = l.iridescenceThicknessMap)
      : l.specularIntensityMap
      ? (M = l.specularIntensityMap)
      : l.specularColorMap
      ? (M = l.specularColorMap)
      : l.transmissionMap
      ? (M = l.transmissionMap)
      : l.thicknessMap
      ? (M = l.thicknessMap)
      : l.sheenColorMap
      ? (M = l.sheenColorMap)
      : l.sheenRoughnessMap && (M = l.sheenRoughnessMap),
      M !== void 0 &&
        (M.isWebGLRenderTarget && (M = M.texture),
        M.matrixAutoUpdate === !0 && M.updateMatrix(),
        p.uvTransform.value.copy(M.matrix));
    let T;
    l.aoMap ? (T = l.aoMap) : l.lightMap && (T = l.lightMap),
      T !== void 0 &&
        (T.isWebGLRenderTarget && (T = T.texture),
        T.matrixAutoUpdate === !0 && T.updateMatrix(),
        p.uv2Transform.value.copy(T.matrix));
  }
  function a(p, l) {
    p.diffuse.value.copy(l.color), (p.opacity.value = l.opacity);
  }
  function o(p, l) {
    (p.dashSize.value = l.dashSize),
      (p.totalSize.value = l.dashSize + l.gapSize),
      (p.scale.value = l.scale);
  }
  function s(p, l, _, M) {
    p.diffuse.value.copy(l.color),
      (p.opacity.value = l.opacity),
      (p.size.value = l.size * _),
      (p.scale.value = M * 0.5),
      l.map && (p.map.value = l.map),
      l.alphaMap && (p.alphaMap.value = l.alphaMap),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
    let T;
    l.map ? (T = l.map) : l.alphaMap && (T = l.alphaMap),
      T !== void 0 &&
        (T.matrixAutoUpdate === !0 && T.updateMatrix(),
        p.uvTransform.value.copy(T.matrix));
  }
  function f(p, l) {
    p.diffuse.value.copy(l.color),
      (p.opacity.value = l.opacity),
      (p.rotation.value = l.rotation),
      l.map && (p.map.value = l.map),
      l.alphaMap && (p.alphaMap.value = l.alphaMap),
      l.alphaTest > 0 && (p.alphaTest.value = l.alphaTest);
    let _;
    l.map ? (_ = l.map) : l.alphaMap && (_ = l.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        p.uvTransform.value.copy(_.matrix));
  }
  function c(p, l) {
    p.specular.value.copy(l.specular),
      (p.shininess.value = Math.max(l.shininess, 1e-4));
  }
  function d(p, l) {
    l.gradientMap && (p.gradientMap.value = l.gradientMap);
  }
  function u(p, l) {
    (p.roughness.value = l.roughness),
      (p.metalness.value = l.metalness),
      l.roughnessMap && (p.roughnessMap.value = l.roughnessMap),
      l.metalnessMap && (p.metalnessMap.value = l.metalnessMap),
      e.get(l).envMap && (p.envMapIntensity.value = l.envMapIntensity);
  }
  function h(p, l, _) {
    (p.ior.value = l.ior),
      l.sheen > 0 &&
        (p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),
        (p.sheenRoughness.value = l.sheenRoughness),
        l.sheenColorMap && (p.sheenColorMap.value = l.sheenColorMap),
        l.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = l.sheenRoughnessMap)),
      l.clearcoat > 0 &&
        ((p.clearcoat.value = l.clearcoat),
        (p.clearcoatRoughness.value = l.clearcoatRoughness),
        l.clearcoatMap && (p.clearcoatMap.value = l.clearcoatMap),
        l.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = l.clearcoatRoughnessMap),
        l.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = l.clearcoatNormalMap),
          l.side === mt && p.clearcoatNormalScale.value.negate())),
      l.iridescence > 0 &&
        ((p.iridescence.value = l.iridescence),
        (p.iridescenceIOR.value = l.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = l.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = l.iridescenceThicknessRange[1]),
        l.iridescenceMap && (p.iridescenceMap.value = l.iridescenceMap),
        l.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = l.iridescenceThicknessMap)),
      l.transmission > 0 &&
        ((p.transmission.value = l.transmission),
        (p.transmissionSamplerMap.value = _.texture),
        p.transmissionSamplerSize.value.set(_.width, _.height),
        l.transmissionMap && (p.transmissionMap.value = l.transmissionMap),
        (p.thickness.value = l.thickness),
        l.thicknessMap && (p.thicknessMap.value = l.thicknessMap),
        (p.attenuationDistance.value = l.attenuationDistance),
        p.attenuationColor.value.copy(l.attenuationColor)),
      (p.specularIntensity.value = l.specularIntensity),
      p.specularColor.value.copy(l.specularColor),
      l.specularIntensityMap &&
        (p.specularIntensityMap.value = l.specularIntensityMap),
      l.specularColorMap && (p.specularColorMap.value = l.specularColorMap);
  }
  function m(p, l) {
    l.matcap && (p.matcap.value = l.matcap);
  }
  function b(p, l) {
    p.referencePosition.value.copy(l.referencePosition),
      (p.nearDistance.value = l.nearDistance),
      (p.farDistance.value = l.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Au(r, e, t, n) {
  let i = {},
    a = {},
    o = [];
  const s = t.isWebGL2 ? r.getParameter(35375) : 0;
  function f(M, T) {
    const w = T.program;
    n.uniformBlockBinding(M, w);
  }
  function c(M, T) {
    let w = i[M.id];
    w === void 0 &&
      (b(M), (w = d(M)), (i[M.id] = w), M.addEventListener("dispose", l));
    const y = T.program;
    n.updateUBOMapping(M, y);
    const A = e.render.frame;
    a[M.id] !== A && (h(M), (a[M.id] = A));
  }
  function d(M) {
    const T = u();
    M.__bindingPointIndex = T;
    const w = r.createBuffer(),
      y = M.__size,
      A = M.usage;
    return (
      r.bindBuffer(35345, w),
      r.bufferData(35345, y, A),
      r.bindBuffer(35345, null),
      r.bindBufferBase(35345, T, w),
      w
    );
  }
  function u() {
    for (let M = 0; M < s; M++) if (o.indexOf(M) === -1) return o.push(M), M;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function h(M) {
    const T = i[M.id],
      w = M.uniforms,
      y = M.__cache;
    r.bindBuffer(35345, T);
    for (let A = 0, N = w.length; A < N; A++) {
      const x = w[A];
      if (m(x, A, y) === !0) {
        const E = x.value,
          F = x.__offset;
        typeof E == "number"
          ? ((x.__data[0] = E), r.bufferSubData(35345, F, x.__data))
          : (x.value.isMatrix3
              ? ((x.__data[0] = x.value.elements[0]),
                (x.__data[1] = x.value.elements[1]),
                (x.__data[2] = x.value.elements[2]),
                (x.__data[3] = x.value.elements[0]),
                (x.__data[4] = x.value.elements[3]),
                (x.__data[5] = x.value.elements[4]),
                (x.__data[6] = x.value.elements[5]),
                (x.__data[7] = x.value.elements[0]),
                (x.__data[8] = x.value.elements[6]),
                (x.__data[9] = x.value.elements[7]),
                (x.__data[10] = x.value.elements[8]),
                (x.__data[11] = x.value.elements[0]))
              : E.toArray(x.__data),
            r.bufferSubData(35345, F, x.__data));
      }
    }
    r.bindBuffer(35345, null);
  }
  function m(M, T, w) {
    const y = M.value;
    if (w[T] === void 0)
      return typeof y == "number" ? (w[T] = y) : (w[T] = y.clone()), !0;
    if (typeof y == "number") {
      if (w[T] !== y) return (w[T] = y), !0;
    } else {
      const A = w[T];
      if (A.equals(y) === !1) return A.copy(y), !0;
    }
    return !1;
  }
  function b(M) {
    const T = M.uniforms;
    let w = 0;
    const y = 16;
    let A = 0;
    for (let N = 0, x = T.length; N < x; N++) {
      const E = T[N],
        F = p(E);
      if (
        ((E.__data = new Float32Array(
          F.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (E.__offset = w),
        N > 0)
      ) {
        A = w % y;
        const X = y - A;
        A !== 0 && X - F.boundary < 0 && ((w += y - A), (E.__offset = w));
      }
      w += F.storage;
    }
    return (
      (A = w % y), A > 0 && (w += y - A), (M.__size = w), (M.__cache = {}), this
    );
  }
  function p(M) {
    const T = M.value,
      w = { boundary: 0, storage: 0 };
    return (
      typeof T == "number"
        ? ((w.boundary = 4), (w.storage = 4))
        : T.isVector2
        ? ((w.boundary = 8), (w.storage = 8))
        : T.isVector3 || T.isColor
        ? ((w.boundary = 16), (w.storage = 12))
        : T.isVector4
        ? ((w.boundary = 16), (w.storage = 16))
        : T.isMatrix3
        ? ((w.boundary = 48), (w.storage = 48))
        : T.isMatrix4
        ? ((w.boundary = 64), (w.storage = 64))
        : T.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            T
          ),
      w
    );
  }
  function l(M) {
    const T = M.target;
    T.removeEventListener("dispose", l);
    const w = o.indexOf(T.__bindingPointIndex);
    o.splice(w, 1), r.deleteBuffer(i[T.id]), delete i[T.id], delete a[T.id];
  }
  function _() {
    for (const M in i) r.deleteBuffer(i[M]);
    (o = []), (i = {}), (a = {});
  }
  return { bind: f, update: c, dispose: _ };
}
function Cu() {
  const r = Ri("canvas");
  return (r.style.display = "block"), r;
}
function Ss(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : Cu(),
    t = r.context !== void 0 ? r.context : null,
    n = r.depth !== void 0 ? r.depth : !0,
    i = r.stencil !== void 0 ? r.stencil : !0,
    a = r.antialias !== void 0 ? r.antialias : !1,
    o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    s = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    f = r.powerPreference !== void 0 ? r.powerPreference : "default",
    c =
      r.failIfMajorPerformanceCaveat !== void 0
        ? r.failIfMajorPerformanceCaveat
        : !1;
  let d;
  t !== null
    ? (d = t.getContextAttributes().alpha)
    : (d = r.alpha !== void 0 ? r.alpha : !1);
  let u = null,
    h = null;
  const m = [],
    b = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = mn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Gt),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const p = this;
  let l = !1,
    _ = 0,
    M = 0,
    T = null,
    w = -1,
    y = null;
  const A = new je(),
    N = new je();
  let x = null,
    E = e.width,
    F = e.height,
    X = 1,
    re = null,
    O = null;
  const I = new je(0, 0, E, F),
    q = new je(0, 0, E, F);
  let Y = !1;
  const j = new gs();
  let W = !1,
    P = !1,
    U = null;
  const J = new qe(),
    $ = new Fe(),
    Z = new D(),
    fe = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ge() {
    return T === null ? X : 1;
  }
  let H = t;
  function De(v, R) {
    for (let G = 0; G < v.length; G++) {
      const L = v[G],
        k = e.getContext(L, R);
      if (k !== null) return k;
    }
    return null;
  }
  try {
    const v = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: a,
      premultipliedAlpha: o,
      preserveDrawingBuffer: s,
      powerPreference: f,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Da}`),
      e.addEventListener("webglcontextlost", ve, !1),
      e.addEventListener("webglcontextrestored", Ae, !1),
      e.addEventListener("webglcontextcreationerror", Oe, !1),
      H === null)
    ) {
      const R = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && R.shift(), (H = De(R, v)), H === null))
        throw De(R)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    H.getShaderPrecisionFormat === void 0 &&
      (H.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (v) {
    throw (console.error("THREE.WebGLRenderer: " + v.message), v);
  }
  let pe,
    be,
    oe,
    Pe,
    Se,
    he,
    Xe,
    it,
    Ke,
    yt,
    Ye,
    Re,
    Lt,
    wt,
    S,
    g,
    V,
    K,
    Q,
    ne,
    _e,
    z,
    de,
    se;
  function le() {
    (pe = new Bl(H)),
      (be = new Pl(H, pe, r)),
      pe.init(be),
      (z = new Mu(H, pe, be)),
      (oe = new xu(H, pe, be)),
      (Pe = new kl()),
      (Se = new ru()),
      (he = new vu(H, pe, oe, Se, be, z, Pe)),
      (Xe = new Fl(p)),
      (it = new Ol(p)),
      (Ke = new Ko(H, be)),
      (de = new Dl(H, pe, Ke, be)),
      (yt = new Gl(H, Ke, Pe, de)),
      (Ye = new Xl(H, yt, Ke, Pe)),
      (Q = new ql(H, be, he)),
      (g = new Il(Se)),
      (Re = new au(p, Xe, it, pe, be, de, g)),
      (Lt = new Eu(p, Se)),
      (wt = new ou()),
      (S = new hu(pe, be)),
      (K = new Ll(p, Xe, oe, Ye, d, o)),
      (V = new _u(p, Ye, be)),
      (se = new Au(H, Pe, be, oe)),
      (ne = new Rl(H, pe, Pe, be)),
      (_e = new Vl(H, pe, Pe, be)),
      (Pe.programs = Re.programs),
      (p.capabilities = be),
      (p.extensions = pe),
      (p.properties = Se),
      (p.renderLists = wt),
      (p.shadowMap = V),
      (p.state = oe),
      (p.info = Pe);
  }
  le();
  const ce = new Tu(p, H);
  (this.xr = ce),
    (this.getContext = function () {
      return H;
    }),
    (this.getContextAttributes = function () {
      return H.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const v = pe.get("WEBGL_lose_context");
      v && v.loseContext();
    }),
    (this.forceContextRestore = function () {
      const v = pe.get("WEBGL_lose_context");
      v && v.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return X;
    }),
    (this.setPixelRatio = function (v) {
      v !== void 0 && ((X = v), this.setSize(E, F, !1));
    }),
    (this.getSize = function (v) {
      return v.set(E, F);
    }),
    (this.setSize = function (v, R, G) {
      if (ce.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (E = v),
        (F = R),
        (e.width = Math.floor(v * X)),
        (e.height = Math.floor(R * X)),
        G !== !1 && ((e.style.width = v + "px"), (e.style.height = R + "px")),
        this.setViewport(0, 0, v, R);
    }),
    (this.getDrawingBufferSize = function (v) {
      return v.set(E * X, F * X).floor();
    }),
    (this.setDrawingBufferSize = function (v, R, G) {
      (E = v),
        (F = R),
        (X = G),
        (e.width = Math.floor(v * G)),
        (e.height = Math.floor(R * G)),
        this.setViewport(0, 0, v, R);
    }),
    (this.getCurrentViewport = function (v) {
      return v.copy(A);
    }),
    (this.getViewport = function (v) {
      return v.copy(I);
    }),
    (this.setViewport = function (v, R, G, L) {
      v.isVector4 ? I.set(v.x, v.y, v.z, v.w) : I.set(v, R, G, L),
        oe.viewport(A.copy(I).multiplyScalar(X).floor());
    }),
    (this.getScissor = function (v) {
      return v.copy(q);
    }),
    (this.setScissor = function (v, R, G, L) {
      v.isVector4 ? q.set(v.x, v.y, v.z, v.w) : q.set(v, R, G, L),
        oe.scissor(N.copy(q).multiplyScalar(X).floor());
    }),
    (this.getScissorTest = function () {
      return Y;
    }),
    (this.setScissorTest = function (v) {
      oe.setScissorTest((Y = v));
    }),
    (this.setOpaqueSort = function (v) {
      re = v;
    }),
    (this.setTransparentSort = function (v) {
      O = v;
    }),
    (this.getClearColor = function (v) {
      return v.copy(K.getClearColor());
    }),
    (this.setClearColor = function () {
      K.setClearColor.apply(K, arguments);
    }),
    (this.getClearAlpha = function () {
      return K.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      K.setClearAlpha.apply(K, arguments);
    }),
    (this.clear = function (v = !0, R = !0, G = !0) {
      let L = 0;
      v && (L |= 16384), R && (L |= 256), G && (L |= 1024), H.clear(L);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", ve, !1),
        e.removeEventListener("webglcontextrestored", Ae, !1),
        e.removeEventListener("webglcontextcreationerror", Oe, !1),
        wt.dispose(),
        S.dispose(),
        Se.dispose(),
        Xe.dispose(),
        it.dispose(),
        Ye.dispose(),
        de.dispose(),
        se.dispose(),
        Re.dispose(),
        ce.dispose(),
        ce.removeEventListener("sessionstart", Ee),
        ce.removeEventListener("sessionend", We),
        U && (U.dispose(), (U = null)),
        Be.stop();
    });
  function ve(v) {
    v.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (l = !0);
  }
  function Ae() {
    console.log("THREE.WebGLRenderer: Context Restored."), (l = !1);
    const v = Pe.autoReset,
      R = V.enabled,
      G = V.autoUpdate,
      L = V.needsUpdate,
      k = V.type;
    le(),
      (Pe.autoReset = v),
      (V.enabled = R),
      (V.autoUpdate = G),
      (V.needsUpdate = L),
      (V.type = k);
  }
  function Oe(v) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      v.statusMessage
    );
  }
  function C(v) {
    const R = v.target;
    R.removeEventListener("dispose", C), ae(R);
  }
  function ae(v) {
    B(v), Se.remove(v);
  }
  function B(v) {
    const R = Se.get(v).programs;
    R !== void 0 &&
      (R.forEach(function (G) {
        Re.releaseProgram(G);
      }),
      v.isShaderMaterial && Re.releaseShaderCache(v));
  }
  (this.renderBufferDirect = function (v, R, G, L, k, ue) {
    R === null && (R = fe);
    const me = k.isMesh && k.matrixWorld.determinant() < 0,
      Me = Ls(v, R, G, L, k);
    oe.setMaterial(L, me);
    let xe = G.index;
    const Le = G.attributes.position;
    if (xe === null) {
      if (Le === void 0 || Le.count === 0) return;
    } else if (xe.count === 0) return;
    let we = 1;
    L.wireframe === !0 && ((xe = yt.getWireframeAttribute(G)), (we = 2)),
      de.setup(k, L, Me, G, xe);
    let Te,
      Ue = ne;
    xe !== null && ((Te = Ke.get(xe)), (Ue = _e), Ue.setIndex(Te));
    const en = xe !== null ? xe.count : Le.count,
      bn = G.drawRange.start * we,
      _n = G.drawRange.count * we,
      Tt = ue !== null ? ue.start * we : 0,
      Ce = ue !== null ? ue.count * we : 1 / 0,
      xn = Math.max(bn, Tt),
      Ge = Math.min(en, bn + _n, Tt + Ce) - 1,
      lt = Math.max(0, Ge - xn + 1);
    if (lt !== 0) {
      if (k.isMesh)
        L.wireframe === !0
          ? (oe.setLineWidth(L.wireframeLinewidth * ge()), Ue.setMode(1))
          : Ue.setMode(4);
      else if (k.isLine) {
        let Wt = L.linewidth;
        Wt === void 0 && (Wt = 1),
          oe.setLineWidth(Wt * ge()),
          k.isLineSegments
            ? Ue.setMode(1)
            : k.isLineLoop
            ? Ue.setMode(2)
            : Ue.setMode(3);
      } else k.isPoints ? Ue.setMode(0) : k.isSprite && Ue.setMode(4);
      if (k.isInstancedMesh) Ue.renderInstances(xn, lt, k.count);
      else if (G.isInstancedBufferGeometry) {
        const Wt = Math.min(G.instanceCount, G._maxInstanceCount);
        Ue.renderInstances(xn, lt, Wt);
      } else Ue.render(xn, lt);
    }
  }),
    (this.compile = function (v, R) {
      function G(L, k, ue) {
        L.transparent === !0 && L.side === Ot
          ? ((L.side = mt),
            (L.needsUpdate = !0),
            ri(L, k, ue),
            (L.side = On),
            (L.needsUpdate = !0),
            ri(L, k, ue),
            (L.side = Ot))
          : ri(L, k, ue);
      }
      (h = S.get(v)),
        h.init(),
        b.push(h),
        v.traverseVisible(function (L) {
          L.isLight &&
            L.layers.test(R.layers) &&
            (h.pushLight(L), L.castShadow && h.pushShadow(L));
        }),
        h.setupLights(p.physicallyCorrectLights),
        v.traverse(function (L) {
          const k = L.material;
          if (k)
            if (Array.isArray(k))
              for (let ue = 0; ue < k.length; ue++) {
                const me = k[ue];
                G(me, v, L);
              }
            else G(k, v, L);
        }),
        b.pop(),
        (h = null);
    });
  let ie = null;
  function te(v) {
    ie && ie(v);
  }
  function Ee() {
    Be.stop();
  }
  function We() {
    Be.start();
  }
  const Be = new bs();
  Be.setAnimationLoop(te),
    typeof self < "u" && Be.setContext(self),
    (this.setAnimationLoop = function (v) {
      (ie = v), ce.setAnimationLoop(v), v === null ? Be.stop() : Be.start();
    }),
    ce.addEventListener("sessionstart", Ee),
    ce.addEventListener("sessionend", We),
    (this.render = function (v, R) {
      if (R !== void 0 && R.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (l === !0) return;
      v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
        R.parent === null &&
          R.matrixWorldAutoUpdate === !0 &&
          R.updateMatrixWorld(),
        ce.enabled === !0 &&
          ce.isPresenting === !0 &&
          (ce.cameraAutoUpdate === !0 && ce.updateCamera(R),
          (R = ce.getCamera())),
        v.isScene === !0 && v.onBeforeRender(p, v, R, T),
        (h = S.get(v, b.length)),
        h.init(),
        b.push(h),
        J.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse),
        j.setFromProjectionMatrix(J),
        (P = this.localClippingEnabled),
        (W = g.init(this.clippingPlanes, P, R)),
        (u = wt.get(v, m.length)),
        u.init(),
        m.push(u),
        kt(v, R, 0, p.sortObjects),
        u.finish(),
        p.sortObjects === !0 && u.sort(re, O),
        W === !0 && g.beginShadows();
      const G = h.state.shadowsArray;
      if (
        (V.render(G, v, R),
        W === !0 && g.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        K.render(u, v),
        h.setupLights(p.physicallyCorrectLights),
        R.isArrayCamera)
      ) {
        const L = R.cameras;
        for (let k = 0, ue = L.length; k < ue; k++) {
          const me = L[k];
          Ne(u, v, me, me.viewport);
        }
      } else Ne(u, v, R);
      T !== null &&
        (he.updateMultisampleRenderTarget(T), he.updateRenderTargetMipmap(T)),
        v.isScene === !0 && v.onAfterRender(p, v, R),
        de.resetDefaultState(),
        (w = -1),
        (y = null),
        b.pop(),
        b.length > 0 ? (h = b[b.length - 1]) : (h = null),
        m.pop(),
        m.length > 0 ? (u = m[m.length - 1]) : (u = null);
    });
  function kt(v, R, G, L) {
    if (v.visible === !1) return;
    if (v.layers.test(R.layers)) {
      if (v.isGroup) G = v.renderOrder;
      else if (v.isLOD) v.autoUpdate === !0 && v.update(R);
      else if (v.isLight) h.pushLight(v), v.castShadow && h.pushShadow(v);
      else if (v.isSprite) {
        if (!v.frustumCulled || j.intersectsSprite(v)) {
          L && Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);
          const me = Ye.update(v),
            Me = v.material;
          Me.visible && u.push(v, me, Me, G, Z.z, null);
        }
      } else if (
        (v.isMesh || v.isLine || v.isPoints) &&
        (v.isSkinnedMesh &&
          v.skeleton.frame !== Pe.render.frame &&
          (v.skeleton.update(), (v.skeleton.frame = Pe.render.frame)),
        !v.frustumCulled || j.intersectsObject(v))
      ) {
        L && Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);
        const me = Ye.update(v),
          Me = v.material;
        if (Array.isArray(Me)) {
          const xe = me.groups;
          for (let Le = 0, we = xe.length; Le < we; Le++) {
            const Te = xe[Le],
              Ue = Me[Te.materialIndex];
            Ue && Ue.visible && u.push(v, me, Ue, G, Z.z, Te);
          }
        } else Me.visible && u.push(v, me, Me, G, Z.z, null);
      }
    }
    const ue = v.children;
    for (let me = 0, Me = ue.length; me < Me; me++) kt(ue[me], R, G, L);
  }
  function Ne(v, R, G, L) {
    const k = v.opaque,
      ue = v.transmissive,
      me = v.transparent;
    h.setupLightsView(G),
      ue.length > 0 && Dt(k, R, G),
      L && oe.viewport(A.copy(L)),
      k.length > 0 && ft(k, R, G),
      ue.length > 0 && ft(ue, R, G),
      me.length > 0 && ft(me, R, G),
      oe.buffers.depth.setTest(!0),
      oe.buffers.depth.setMask(!0),
      oe.buffers.color.setMask(!0),
      oe.setPolygonOffset(!1);
  }
  function Dt(v, R, G) {
    const L = be.isWebGL2;
    U === null &&
      (U = new gn(1, 1, {
        generateMipmaps: !0,
        type: pe.has("EXT_color_buffer_half_float") ? Kn : pn,
        minFilter: Ii,
        samples: L && a === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize($),
      L ? U.setSize($.x, $.y) : U.setSize(Aa($.x), Aa($.y));
    const k = p.getRenderTarget();
    p.setRenderTarget(U), p.clear();
    const ue = p.toneMapping;
    (p.toneMapping = Gt),
      ft(v, R, G),
      (p.toneMapping = ue),
      he.updateMultisampleRenderTarget(U),
      he.updateRenderTargetMipmap(U),
      p.setRenderTarget(k);
  }
  function ft(v, R, G) {
    const L = R.isScene === !0 ? R.overrideMaterial : null;
    for (let k = 0, ue = v.length; k < ue; k++) {
      const me = v[k],
        Me = me.object,
        xe = me.geometry,
        Le = L === null ? me.material : L,
        we = me.group;
      Me.layers.test(G.layers) && Cs(Me, R, G, xe, Le, we);
    }
  }
  function Cs(v, R, G, L, k, ue) {
    v.onBeforeRender(p, R, G, L, k, ue),
      v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, v.matrixWorld),
      v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
      k.onBeforeRender(p, R, G, L, v, ue),
      k.transparent === !0 && k.side === Ot
        ? ((k.side = mt),
          (k.needsUpdate = !0),
          p.renderBufferDirect(G, R, L, k, v, ue),
          (k.side = On),
          (k.needsUpdate = !0),
          p.renderBufferDirect(G, R, L, k, v, ue),
          (k.side = Ot))
        : p.renderBufferDirect(G, R, L, k, v, ue),
      v.onAfterRender(p, R, G, L, k, ue);
  }
  function ri(v, R, G) {
    R.isScene !== !0 && (R = fe);
    const L = Se.get(v),
      k = h.state.lights,
      ue = h.state.shadowsArray,
      me = k.state.version,
      Me = Re.getParameters(v, k.state, ue, R, G),
      xe = Re.getProgramCacheKey(Me);
    let Le = L.programs;
    (L.environment = v.isMeshStandardMaterial ? R.environment : null),
      (L.fog = R.fog),
      (L.envMap = (v.isMeshStandardMaterial ? it : Xe).get(
        v.envMap || L.environment
      )),
      Le === void 0 &&
        (v.addEventListener("dispose", C), (Le = new Map()), (L.programs = Le));
    let we = Le.get(xe);
    if (we !== void 0) {
      if (L.currentProgram === we && L.lightsStateVersion === me)
        return Pa(v, Me), we;
    } else
      (Me.uniforms = Re.getUniforms(v)),
        v.onBuild(G, Me, p),
        v.onBeforeCompile(Me, p),
        (we = Re.acquireProgram(Me, xe)),
        Le.set(xe, we),
        (L.uniforms = Me.uniforms);
    const Te = L.uniforms;
    ((!v.isShaderMaterial && !v.isRawShaderMaterial) || v.clipping === !0) &&
      (Te.clippingPlanes = g.uniform),
      Pa(v, Me),
      (L.needsLights = Rs(v)),
      (L.lightsStateVersion = me),
      L.needsLights &&
        ((Te.ambientLightColor.value = k.state.ambient),
        (Te.lightProbe.value = k.state.probe),
        (Te.directionalLights.value = k.state.directional),
        (Te.directionalLightShadows.value = k.state.directionalShadow),
        (Te.spotLights.value = k.state.spot),
        (Te.spotLightShadows.value = k.state.spotShadow),
        (Te.rectAreaLights.value = k.state.rectArea),
        (Te.ltc_1.value = k.state.rectAreaLTC1),
        (Te.ltc_2.value = k.state.rectAreaLTC2),
        (Te.pointLights.value = k.state.point),
        (Te.pointLightShadows.value = k.state.pointShadow),
        (Te.hemisphereLights.value = k.state.hemi),
        (Te.directionalShadowMap.value = k.state.directionalShadowMap),
        (Te.directionalShadowMatrix.value = k.state.directionalShadowMatrix),
        (Te.spotShadowMap.value = k.state.spotShadowMap),
        (Te.spotLightMatrix.value = k.state.spotLightMatrix),
        (Te.spotLightMap.value = k.state.spotLightMap),
        (Te.pointShadowMap.value = k.state.pointShadowMap),
        (Te.pointShadowMatrix.value = k.state.pointShadowMatrix));
    const Ue = we.getUniforms(),
      en = Di.seqWithValue(Ue.seq, Te);
    return (L.currentProgram = we), (L.uniformsList = en), we;
  }
  function Pa(v, R) {
    const G = Se.get(v);
    (G.outputEncoding = R.outputEncoding),
      (G.instancing = R.instancing),
      (G.skinning = R.skinning),
      (G.morphTargets = R.morphTargets),
      (G.morphNormals = R.morphNormals),
      (G.morphColors = R.morphColors),
      (G.morphTargetsCount = R.morphTargetsCount),
      (G.numClippingPlanes = R.numClippingPlanes),
      (G.numIntersection = R.numClipIntersection),
      (G.vertexAlphas = R.vertexAlphas),
      (G.vertexTangents = R.vertexTangents),
      (G.toneMapping = R.toneMapping);
  }
  function Ls(v, R, G, L, k) {
    R.isScene !== !0 && (R = fe), he.resetTextureUnits();
    const ue = R.fog,
      me = L.isMeshStandardMaterial ? R.environment : null,
      Me =
        T === null
          ? p.outputEncoding
          : T.isXRRenderTarget === !0
          ? T.texture.encoding
          : mn,
      xe = (L.isMeshStandardMaterial ? it : Xe).get(L.envMap || me),
      Le =
        L.vertexColors === !0 &&
        !!G.attributes.color &&
        G.attributes.color.itemSize === 4,
      we = !!L.normalMap && !!G.attributes.tangent,
      Te = !!G.morphAttributes.position,
      Ue = !!G.morphAttributes.normal,
      en = !!G.morphAttributes.color,
      bn = L.toneMapped ? p.toneMapping : Gt,
      _n =
        G.morphAttributes.position ||
        G.morphAttributes.normal ||
        G.morphAttributes.color,
      Tt = _n !== void 0 ? _n.length : 0,
      Ce = Se.get(L),
      xn = h.state.lights;
    if (W === !0 && (P === !0 || v !== y)) {
      const at = v === y && L.id === w;
      g.setState(L, v, at);
    }
    let Ge = !1;
    L.version === Ce.__version
      ? ((Ce.needsLights && Ce.lightsStateVersion !== xn.state.version) ||
          Ce.outputEncoding !== Me ||
          (k.isInstancedMesh && Ce.instancing === !1) ||
          (!k.isInstancedMesh && Ce.instancing === !0) ||
          (k.isSkinnedMesh && Ce.skinning === !1) ||
          (!k.isSkinnedMesh && Ce.skinning === !0) ||
          Ce.envMap !== xe ||
          (L.fog === !0 && Ce.fog !== ue) ||
          (Ce.numClippingPlanes !== void 0 &&
            (Ce.numClippingPlanes !== g.numPlanes ||
              Ce.numIntersection !== g.numIntersection)) ||
          Ce.vertexAlphas !== Le ||
          Ce.vertexTangents !== we ||
          Ce.morphTargets !== Te ||
          Ce.morphNormals !== Ue ||
          Ce.morphColors !== en ||
          Ce.toneMapping !== bn ||
          (be.isWebGL2 === !0 && Ce.morphTargetsCount !== Tt)) &&
        (Ge = !0)
      : ((Ge = !0), (Ce.__version = L.version));
    let lt = Ce.currentProgram;
    Ge === !0 && (lt = ri(L, R, k));
    let Wt = !1,
      qn = !1,
      Oi = !1;
    const Je = lt.getUniforms(),
      tn = Ce.uniforms;
    if (
      (oe.useProgram(lt.program) && ((Wt = !0), (qn = !0), (Oi = !0)),
      L.id !== w && ((w = L.id), (qn = !0)),
      Wt || y !== v)
    ) {
      if (
        (Je.setValue(H, "projectionMatrix", v.projectionMatrix),
        be.logarithmicDepthBuffer &&
          Je.setValue(H, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)),
        y !== v && ((y = v), (qn = !0), (Oi = !0)),
        L.isShaderMaterial ||
          L.isMeshPhongMaterial ||
          L.isMeshToonMaterial ||
          L.isMeshStandardMaterial ||
          L.envMap)
      ) {
        const at = Je.map.cameraPosition;
        at !== void 0 && at.setValue(H, Z.setFromMatrixPosition(v.matrixWorld));
      }
      (L.isMeshPhongMaterial ||
        L.isMeshToonMaterial ||
        L.isMeshLambertMaterial ||
        L.isMeshBasicMaterial ||
        L.isMeshStandardMaterial ||
        L.isShaderMaterial) &&
        Je.setValue(H, "isOrthographic", v.isOrthographicCamera === !0),
        (L.isMeshPhongMaterial ||
          L.isMeshToonMaterial ||
          L.isMeshLambertMaterial ||
          L.isMeshBasicMaterial ||
          L.isMeshStandardMaterial ||
          L.isShaderMaterial ||
          L.isShadowMaterial ||
          k.isSkinnedMesh) &&
          Je.setValue(H, "viewMatrix", v.matrixWorldInverse);
    }
    if (k.isSkinnedMesh) {
      Je.setOptional(H, k, "bindMatrix"),
        Je.setOptional(H, k, "bindMatrixInverse");
      const at = k.skeleton;
      at &&
        (be.floatVertexTextures
          ? (at.boneTexture === null && at.computeBoneTexture(),
            Je.setValue(H, "boneTexture", at.boneTexture, he),
            Je.setValue(H, "boneTextureSize", at.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const Bi = G.morphAttributes;
    if (
      ((Bi.position !== void 0 ||
        Bi.normal !== void 0 ||
        (Bi.color !== void 0 && be.isWebGL2 === !0)) &&
        Q.update(k, G, L, lt),
      (qn || Ce.receiveShadow !== k.receiveShadow) &&
        ((Ce.receiveShadow = k.receiveShadow),
        Je.setValue(H, "receiveShadow", k.receiveShadow)),
      L.isMeshGouraudMaterial &&
        L.envMap !== null &&
        ((tn.envMap.value = xe),
        (tn.flipEnvMap.value =
          xe.isCubeTexture && xe.isRenderTargetTexture === !1 ? -1 : 1)),
      qn &&
        (Je.setValue(H, "toneMappingExposure", p.toneMappingExposure),
        Ce.needsLights && Ds(tn, Oi),
        ue && L.fog === !0 && Lt.refreshFogUniforms(tn, ue),
        Lt.refreshMaterialUniforms(tn, L, X, F, U),
        Di.upload(H, Ce.uniformsList, tn, he)),
      L.isShaderMaterial &&
        L.uniformsNeedUpdate === !0 &&
        (Di.upload(H, Ce.uniformsList, tn, he), (L.uniformsNeedUpdate = !1)),
      L.isSpriteMaterial && Je.setValue(H, "center", k.center),
      Je.setValue(H, "modelViewMatrix", k.modelViewMatrix),
      Je.setValue(H, "normalMatrix", k.normalMatrix),
      Je.setValue(H, "modelMatrix", k.matrixWorld),
      L.isShaderMaterial || L.isRawShaderMaterial)
    ) {
      const at = L.uniformsGroups;
      for (let Gi = 0, Ps = at.length; Gi < Ps; Gi++)
        if (be.isWebGL2) {
          const Ia = at[Gi];
          se.update(Ia, lt), se.bind(Ia, lt);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return lt;
  }
  function Ds(v, R) {
    (v.ambientLightColor.needsUpdate = R),
      (v.lightProbe.needsUpdate = R),
      (v.directionalLights.needsUpdate = R),
      (v.directionalLightShadows.needsUpdate = R),
      (v.pointLights.needsUpdate = R),
      (v.pointLightShadows.needsUpdate = R),
      (v.spotLights.needsUpdate = R),
      (v.spotLightShadows.needsUpdate = R),
      (v.rectAreaLights.needsUpdate = R),
      (v.hemisphereLights.needsUpdate = R);
  }
  function Rs(v) {
    return (
      v.isMeshLambertMaterial ||
      v.isMeshToonMaterial ||
      v.isMeshPhongMaterial ||
      v.isMeshStandardMaterial ||
      v.isShadowMaterial ||
      (v.isShaderMaterial && v.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return M;
    }),
    (this.getRenderTarget = function () {
      return T;
    }),
    (this.setRenderTargetTextures = function (v, R, G) {
      (Se.get(v.texture).__webglTexture = R),
        (Se.get(v.depthTexture).__webglTexture = G);
      const L = Se.get(v);
      (L.__hasExternalTextures = !0),
        L.__hasExternalTextures &&
          ((L.__autoAllocateDepthBuffer = G === void 0),
          L.__autoAllocateDepthBuffer ||
            (pe.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (L.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (v, R) {
      const G = Se.get(v);
      (G.__webglFramebuffer = R), (G.__useDefaultFramebuffer = R === void 0);
    }),
    (this.setRenderTarget = function (v, R = 0, G = 0) {
      (T = v), (_ = R), (M = G);
      let L = !0;
      if (v) {
        const xe = Se.get(v);
        xe.__useDefaultFramebuffer !== void 0
          ? (oe.bindFramebuffer(36160, null), (L = !1))
          : xe.__webglFramebuffer === void 0
          ? he.setupRenderTarget(v)
          : xe.__hasExternalTextures &&
            he.rebindTextures(
              v,
              Se.get(v.texture).__webglTexture,
              Se.get(v.depthTexture).__webglTexture
            );
      }
      let k = null,
        ue = !1,
        me = !1;
      if (v) {
        const xe = v.texture;
        (xe.isData3DTexture || xe.isDataArrayTexture) && (me = !0);
        const Le = Se.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget
          ? ((k = Le[R]), (ue = !0))
          : be.isWebGL2 && v.samples > 0 && he.useMultisampledRTT(v) === !1
          ? (k = Se.get(v).__webglMultisampledFramebuffer)
          : (k = Le),
          A.copy(v.viewport),
          N.copy(v.scissor),
          (x = v.scissorTest);
      } else
        A.copy(I).multiplyScalar(X).floor(),
          N.copy(q).multiplyScalar(X).floor(),
          (x = Y);
      if (
        (oe.bindFramebuffer(36160, k) &&
          be.drawBuffers &&
          L &&
          oe.drawBuffers(v, k),
        oe.viewport(A),
        oe.scissor(N),
        oe.setScissorTest(x),
        ue)
      ) {
        const xe = Se.get(v.texture);
        H.framebufferTexture2D(36160, 36064, 34069 + R, xe.__webglTexture, G);
      } else if (me) {
        const xe = Se.get(v.texture),
          Le = R || 0;
        H.framebufferTextureLayer(36160, 36064, xe.__webglTexture, G || 0, Le);
      }
      w = -1;
    }),
    (this.readRenderTargetPixels = function (v, R, G, L, k, ue, me) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Me = Se.get(v).__webglFramebuffer;
      if ((v.isWebGLCubeRenderTarget && me !== void 0 && (Me = Me[me]), Me)) {
        oe.bindFramebuffer(36160, Me);
        try {
          const xe = v.texture,
            Le = xe.format,
            we = xe.type;
          if (Le !== At && z.convert(Le) !== H.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Te =
            we === Kn &&
            (pe.has("EXT_color_buffer_half_float") ||
              (be.isWebGL2 && pe.has("EXT_color_buffer_float")));
          if (
            we !== pn &&
            z.convert(we) !== H.getParameter(35738) &&
            !(
              we === ln &&
              (be.isWebGL2 ||
                pe.has("OES_texture_float") ||
                pe.has("WEBGL_color_buffer_float"))
            ) &&
            !Te
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          R >= 0 &&
            R <= v.width - L &&
            G >= 0 &&
            G <= v.height - k &&
            H.readPixels(R, G, L, k, z.convert(Le), z.convert(we), ue);
        } finally {
          const xe = T !== null ? Se.get(T).__webglFramebuffer : null;
          oe.bindFramebuffer(36160, xe);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (v, R, G = 0) {
      const L = Math.pow(2, -G),
        k = Math.floor(R.image.width * L),
        ue = Math.floor(R.image.height * L);
      he.setTexture2D(R, 0),
        H.copyTexSubImage2D(3553, G, 0, 0, v.x, v.y, k, ue),
        oe.unbindTexture();
    }),
    (this.copyTextureToTexture = function (v, R, G, L = 0) {
      const k = R.image.width,
        ue = R.image.height,
        me = z.convert(G.format),
        Me = z.convert(G.type);
      he.setTexture2D(G, 0),
        H.pixelStorei(37440, G.flipY),
        H.pixelStorei(37441, G.premultiplyAlpha),
        H.pixelStorei(3317, G.unpackAlignment),
        R.isDataTexture
          ? H.texSubImage2D(3553, L, v.x, v.y, k, ue, me, Me, R.image.data)
          : R.isCompressedTexture
          ? H.compressedTexSubImage2D(
              3553,
              L,
              v.x,
              v.y,
              R.mipmaps[0].width,
              R.mipmaps[0].height,
              me,
              R.mipmaps[0].data
            )
          : H.texSubImage2D(3553, L, v.x, v.y, me, Me, R.image),
        L === 0 && G.generateMipmaps && H.generateMipmap(3553),
        oe.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (v, R, G, L, k = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const ue = v.max.x - v.min.x + 1,
        me = v.max.y - v.min.y + 1,
        Me = v.max.z - v.min.z + 1,
        xe = z.convert(L.format),
        Le = z.convert(L.type);
      let we;
      if (L.isData3DTexture) he.setTexture3D(L, 0), (we = 32879);
      else if (L.isDataArrayTexture) he.setTexture2DArray(L, 0), (we = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      H.pixelStorei(37440, L.flipY),
        H.pixelStorei(37441, L.premultiplyAlpha),
        H.pixelStorei(3317, L.unpackAlignment);
      const Te = H.getParameter(3314),
        Ue = H.getParameter(32878),
        en = H.getParameter(3316),
        bn = H.getParameter(3315),
        _n = H.getParameter(32877),
        Tt = G.isCompressedTexture ? G.mipmaps[0] : G.image;
      H.pixelStorei(3314, Tt.width),
        H.pixelStorei(32878, Tt.height),
        H.pixelStorei(3316, v.min.x),
        H.pixelStorei(3315, v.min.y),
        H.pixelStorei(32877, v.min.z),
        G.isDataTexture || G.isData3DTexture
          ? H.texSubImage3D(we, k, R.x, R.y, R.z, ue, me, Me, xe, Le, Tt.data)
          : G.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            H.compressedTexSubImage3D(
              we,
              k,
              R.x,
              R.y,
              R.z,
              ue,
              me,
              Me,
              xe,
              Tt.data
            ))
          : H.texSubImage3D(we, k, R.x, R.y, R.z, ue, me, Me, xe, Le, Tt),
        H.pixelStorei(3314, Te),
        H.pixelStorei(32878, Ue),
        H.pixelStorei(3316, en),
        H.pixelStorei(3315, bn),
        H.pixelStorei(32877, _n),
        k === 0 && L.generateMipmaps && H.generateMipmap(we),
        oe.unbindTexture();
    }),
    (this.initTexture = function (v) {
      v.isCubeTexture
        ? he.setTextureCube(v, 0)
        : v.isData3DTexture
        ? he.setTexture3D(v, 0)
        : v.isDataArrayTexture
        ? he.setTexture2DArray(v, 0)
        : he.setTexture2D(v, 0),
        oe.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (M = 0), (T = null), oe.reset(), de.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Lu extends Ss {}
Lu.prototype.isWebGL1Renderer = !0;
class Du extends nt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class ys extends ii {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Xr = new D(),
  Yr = new D(),
  jr = new qe(),
  xa = new fs(),
  Ci = new Fi();
class Ru extends nt {
  constructor(e = new Vt(), t = new ys()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, a = t.count; i < a; i++)
        Xr.fromBufferAttribute(t, i - 1),
          Yr.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Xr.distanceTo(Yr));
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      a = e.params.Line.threshold,
      o = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ci.copy(n.boundingSphere),
      Ci.applyMatrix4(i),
      (Ci.radius += a),
      e.ray.intersectsSphere(Ci) === !1)
    )
      return;
    jr.copy(i).invert(), xa.copy(e.ray).applyMatrix4(jr);
    const s = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      f = s * s,
      c = new D(),
      d = new D(),
      u = new D(),
      h = new D(),
      m = this.isLineSegments ? 2 : 1,
      b = n.index,
      l = n.attributes.position;
    if (b !== null) {
      const _ = Math.max(0, o.start),
        M = Math.min(b.count, o.start + o.count);
      for (let T = _, w = M - 1; T < w; T += m) {
        const y = b.getX(T),
          A = b.getX(T + 1);
        if (
          (c.fromBufferAttribute(l, y),
          d.fromBufferAttribute(l, A),
          xa.distanceSqToSegment(c, d, h, u) > f)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(h);
        x < e.near ||
          x > e.far ||
          t.push({
            distance: x,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: T,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, o.start),
        M = Math.min(l.count, o.start + o.count);
      for (let T = _, w = M - 1; T < w; T += m) {
        if (
          (c.fromBufferAttribute(l, T),
          d.fromBufferAttribute(l, T + 1),
          xa.distanceSqToSegment(c, d, h, u) > f)
        )
          continue;
        h.applyMatrix4(this.matrixWorld);
        const A = e.ray.origin.distanceTo(h);
        A < e.near ||
          A > e.far ||
          t.push({
            distance: A,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: T,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, o = i.length; a < o; a++) {
          const s = i[a].name || String(a);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = a);
        }
      }
    }
  }
}
const Zr = new D(),
  $r = new D();
class Pu extends Ru {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, a = t.count; i < a; i += 2)
        Zr.fromBufferAttribute(t, i),
          $r.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Zr.distanceTo($r));
      e.setAttribute("lineDistance", new Mt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class Iu {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Kr()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Kr();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Kr() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Fu extends Pu {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      i = new Vt();
    i.setAttribute("position", new Mt(t, 3)),
      i.setAttribute("color", new Mt(n, 3));
    const a = new ys({ vertexColors: !0, toneMapped: !1 });
    super(i, a), (this.type = "AxesHelper");
  }
  setColors(e, t, n) {
    const i = new Ie(),
      a = this.geometry.attributes.color.array;
    return (
      i.set(e),
      i.toArray(a, 0),
      i.toArray(a, 3),
      i.set(t),
      i.toArray(a, 6),
      i.toArray(a, 9),
      i.set(n),
      i.toArray(a, 12),
      i.toArray(a, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Da } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Da));
var Nu = `uniform float uTime;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r
varying vec3 vColor;  

uniform vec2 pixels;\r
uniform vec3 uColor[5];

float PI = 3.1415926535897932384626433832795;\r

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ \r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);


    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;


    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );


    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\r
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\r
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;


    i = mod(i, 289.0 ); \r
    vec4 p = permute( permute( permute( \r
        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
        + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \r
        + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));



    float n_ = 1.0/7.0; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);


    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;


    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \r
        dot(p2,x2), dot(p3,x3) ) );\r
}\r

void main(){

    vColor = vec3(0., 0., 0.);

    vec2 noiseCoord = uv * vec2(3., 4.);

    float tilt = - 0.5 * uv.y;

    float incline = uv.x * 0.1     ;

    float offset  = 0.5 *incline * mix(-0.25, .25, uv.y) ;

    float noise = snoise(vec3(noiseCoord.x + uTime *3., noiseCoord.y, uTime* 10.));

    noise = max(0., noise);

    vec3 pos = vec3 (position.x, position.y ,noise * 0.3 + tilt + incline + offset);\r

    vColor = uColor[4];

    for( int i = 0; i< 5; i++){

        float noiseFlow = 5. + float(i) * 0.3;\r
        float noiseSpeed = 10. + float(i) * 0.3;\r
        float noiseSeed = 1. + float(i) * 10.3;\r
        vec2  noiseFreq = vec2(0.3, 0.4);

        float noise = snoise(\r
            vec3( \r
                noiseCoord.x* noiseFreq.x + uTime * noiseFlow,\r
                noiseCoord.y* noiseFreq.y,\r
                uTime* noiseSpeed + noiseSeed\r
            )\r
        );

        vColor = mix(vColor, uColor[i], noise);

    }\r
    \r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

    \r
}`,
  Uu = `uniform float uTime;\r
uniform float progress;\r
uniform sampler2D texture;\r
uniform vec4 resolution;

varying vec2 vUv;\r
varying vec3 vPosition;\r
varying vec3 vColor;

float PI = 3.1415926535897932384626433832795;

void main(){

    gl_FragColor = vec4 (vUv, 0.0, 1.0);\r
    gl_FragColor = vec4 (vColor, 1.0);

}`;
const ws = [
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
  ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
  ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
  ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"],
  ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
  ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"],
  ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2"],
  ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951"],
  ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5"],
  ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"],
  ["#d9ceb2", "#948c75", "#d5ded9", "#7a6a53", "#99b2b7"],
  ["#ffffff", "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
  ["#efffcd", "#dce9be", "#555152", "#2e2633", "#99173c"],
  ["#343838", "#005f6b", "#008c9e", "#00b4cc", "#00dffc"],
  ["#413e4a", "#73626e", "#b38184", "#f0b49e", "#f7e4be"],
  ["#ff4e50", "#fc913a", "#f9d423", "#ede574", "#e1f5c4"],
  ["#99b898", "#fecea8", "#ff847c", "#e84a5f", "#2a363b"],
  ["#655643", "#80bca3", "#f6f7bd", "#e6ac27", "#bf4d28"],
  ["#00a8c6", "#40c0cb", "#f9f2e7", "#aee239", "#8fbe00"],
  ["#351330", "#424254", "#64908a", "#e8caa4", "#cc2a41"],
  ["#554236", "#f77825", "#d3ce3d", "#f1efa5", "#60b99a"],
  ["#5d4157", "#838689", "#a8caba", "#cad7b2", "#ebe3aa"],
  ["#8c2318", "#5e8c6a", "#88a65e", "#bfb35a", "#f2c45a"],
  ["#fad089", "#ff9c5b", "#f5634a", "#ed303c", "#3b8183"],
  ["#ff4242", "#f4fad2", "#d4ee5e", "#e1edb9", "#f0f2eb"],
  ["#f8b195", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"],
  ["#d1e751", "#ffffff", "#000000", "#4dbce9", "#26ade4"],
  ["#1b676b", "#519548", "#88c425", "#bef202", "#eafde6"],
  ["#5e412f", "#fcebb6", "#78c0a8", "#f07818", "#f0a830"],
  ["#bcbdac", "#cfbe27", "#f27435", "#f02475", "#3b2d38"],
  ["#452632", "#91204d", "#e4844a", "#e8bf56", "#e2f7ce"],
  ["#eee6ab", "#c5bc8e", "#696758", "#45484b", "#36393b"],
  ["#f0d8a8", "#3d1c00", "#86b8b1", "#f2d694", "#fa2a00"],
  ["#2a044a", "#0b2e59", "#0d6759", "#7ab317", "#a0c55f"],
  ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"],
  ["#b9d7d9", "#668284", "#2a2829", "#493736", "#7b3b3b"],
  ["#bbbb88", "#ccc68d", "#eedd99", "#eec290", "#eeaa88"],
  ["#b3cc57", "#ecf081", "#ffbe40", "#ef746f", "#ab3e5b"],
  ["#a3a948", "#edb92e", "#f85931", "#ce1836", "#009989"],
  ["#300030", "#480048", "#601848", "#c04848", "#f07241"],
  ["#67917a", "#170409", "#b8af03", "#ccbf82", "#e33258"],
  ["#aab3ab", "#c4cbb7", "#ebefc9", "#eee0b7", "#e8caaf"],
  ["#e8d5b7", "#0e2430", "#fc3a51", "#f5b349", "#e8d5b9"],
  ["#ab526b", "#bca297", "#c5ceae", "#f0e2a4", "#f4ebc3"],
  ["#607848", "#789048", "#c0d860", "#f0f0d8", "#604848"],
  ["#b6d8c0", "#c8d9bf", "#dadabd", "#ecdbbc", "#fedcba"],
  ["#a8e6ce", "#dcedc2", "#ffd3b5", "#ffaaa6", "#ff8c94"],
  ["#3e4147", "#fffedf", "#dfba69", "#5a2e2e", "#2a2c31"],
  ["#fc354c", "#29221f", "#13747d", "#0abfbc", "#fcf7c5"],
  ["#cc0c39", "#e6781e", "#c8cf02", "#f8fcc1", "#1693a7"],
  ["#1c2130", "#028f76", "#b3e099", "#ffeaad", "#d14334"],
  ["#a7c5bd", "#e5ddcb", "#eb7b59", "#cf4647", "#524656"],
  ["#dad6ca", "#1bb0ce", "#4f8699", "#6a5e72", "#563444"],
  ["#5c323e", "#a82743", "#e15e32", "#c0d23e", "#e5f04c"],
  ["#edebe6", "#d6e1c7", "#94c7b6", "#403b33", "#d3643b"],
  ["#fdf1cc", "#c6d6b8", "#987f69", "#e3ad40", "#fcd036"],
  ["#230f2b", "#f21d41", "#ebebbc", "#bce3c5", "#82b3ae"],
  ["#b9d3b0", "#81bda4", "#b28774", "#f88f79", "#f6aa93"],
  ["#3a111c", "#574951", "#83988e", "#bcdea5", "#e6f9bc"],
  ["#5e3929", "#cd8c52", "#b7d1a3", "#dee8be", "#fcf7d3"],
  ["#1c0113", "#6b0103", "#a30006", "#c21a01", "#f03c02"],
  ["#000000", "#9f111b", "#b11623", "#292c37", "#cccccc"],
  ["#382f32", "#ffeaf2", "#fcd9e5", "#fbc5d8", "#f1396d"],
  ["#e3dfba", "#c8d6bf", "#93ccc6", "#6cbdb5", "#1a1f1e"],
  ["#f6f6f6", "#e8e8e8", "#333333", "#990100", "#b90504"],
  ["#1b325f", "#9cc4e4", "#e9f2f9", "#3a89c9", "#f26c4f"],
  ["#a1dbb2", "#fee5ad", "#faca66", "#f7a541", "#f45d4c"],
  ["#c1b398", "#605951", "#fbeec2", "#61a6ab", "#accec0"],
  ["#5e9fa3", "#dcd1b4", "#fab87f", "#f87e7b", "#b05574"],
  ["#951f2b", "#f5f4d7", "#e0dfb1", "#a5a36c", "#535233"],
  ["#8dccad", "#988864", "#fea6a2", "#f9d6ac", "#ffe9af"],
  ["#2d2d29", "#215a6d", "#3ca2a2", "#92c7a3", "#dfece6"],
  ["#413d3d", "#040004", "#c8ff00", "#fa023c", "#4b000f"],
  ["#eff3cd", "#b2d5ba", "#61ada0", "#248f8d", "#605063"],
  ["#ffefd3", "#fffee4", "#d0ecea", "#9fd6d2", "#8b7a5e"],
  ["#cfffdd", "#b4dec1", "#5c5863", "#a85163", "#ff1f4c"],
  ["#9dc9ac", "#fffec7", "#f56218", "#ff9d2e", "#919167"],
  ["#4e395d", "#827085", "#8ebe94", "#ccfc8e", "#dc5b3e"],
  ["#a8a7a7", "#cc527a", "#e8175d", "#474747", "#363636"],
  ["#f8edd1", "#d88a8a", "#474843", "#9d9d93", "#c5cfc6"],
  ["#046d8b", "#309292", "#2fb8ac", "#93a42a", "#ecbe13"],
  ["#f38a8a", "#55443d", "#a0cab5", "#cde9ca", "#f1edd0"],
  ["#a70267", "#f10c49", "#fb6b41", "#f6d86b", "#339194"],
  ["#ff003c", "#ff8a00", "#fabe28", "#88c100", "#00c176"],
  ["#ffedbf", "#f7803c", "#f54828", "#2e0d23", "#f8e4c1"],
  ["#4e4d4a", "#353432", "#94ba65", "#2790b0", "#2b4e72"],
  ["#0ca5b0", "#4e3f30", "#fefeeb", "#f8f4e4", "#a5b3aa"],
  ["#4d3b3b", "#de6262", "#ffb88c", "#ffd0b3", "#f5e0d3"],
  ["#fffbb7", "#a6f6af", "#66b6ab", "#5b7c8d", "#4f2958"],
  ["#edf6ee", "#d1c089", "#b3204d", "#412e28", "#151101"],
  ["#9d7e79", "#ccac95", "#9a947c", "#748b83", "#5b756c"],
  ["#fcfef5", "#e9ffe1", "#cdcfb7", "#d6e6c3", "#fafbe3"],
  ["#9cddc8", "#bfd8ad", "#ddd9ab", "#f7af63", "#633d2e"],
  ["#30261c", "#403831", "#36544f", "#1f5f61", "#0b8185"],
  ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"],
  ["#d1313d", "#e5625c", "#f9bf76", "#8eb2c5", "#615375"],
  ["#ffe181", "#eee9e5", "#fad3b2", "#ffba7f", "#ff9c97"],
  ["#73c8a9", "#dee1b6", "#e1b866", "#bd5532", "#373b44"],
  ["#805841", "#dcf7f3", "#fffcdd", "#ffd8d8", "#f5a2a2"],
  ["#379f7a", "#78ae62", "#bbb749", "#e0fbac", "#1f1c0d"],
  ["#caff42", "#ebf7f8", "#d0e0eb", "#88abc2", "#49708a"],
  ["#c2412d", "#d1aa34", "#a7a844", "#a46583", "#5a1e4a"],
  ["#75616b", "#bfcff7", "#dce4f7", "#f8f3bf", "#d34017"],
  ["#111625", "#341931", "#571b3c", "#7a1e48", "#9d2053"],
  ["#82837e", "#94b053", "#bdeb07", "#bffa37", "#e0e0e0"],
  ["#7e5686", "#a5aad9", "#e8f9a2", "#f8a13f", "#ba3c3d"],
  ["#312736", "#d4838f", "#d6abb1", "#d9d9d9", "#c4ffeb"],
  ["#395a4f", "#432330", "#853c43", "#f25c5e", "#ffa566"],
  ["#fde6bd", "#a1c5ab", "#f4dd51", "#d11e48", "#632f53"],
  ["#84b295", "#eccf8d", "#bb8138", "#ac2005", "#2c1507"],
  ["#058789", "#503d2e", "#d54b1a", "#e3a72f", "#f0ecc9"],
  ["#6da67a", "#77b885", "#86c28b", "#859987", "#4a4857"],
  ["#bed6c7", "#adc0b4", "#8a7e66", "#a79b83", "#bbb2a1"],
  ["#261c21", "#6e1e62", "#b0254f", "#de4126", "#eb9605"],
  ["#efd9b4", "#d6a692", "#a39081", "#4d6160", "#292522"],
  ["#e21b5a", "#9e0c39", "#333333", "#fbffe3", "#83a300"],
  ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
  ["#c75233", "#c78933", "#d6ceaa", "#79b5ac", "#5e2f46"],
  ["#793a57", "#4d3339", "#8c873e", "#d1c5a5", "#a38a5f"],
  ["#512b52", "#635274", "#7bb0a8", "#a7dbab", "#e4f5b1"],
  ["#11644d", "#a0b046", "#f2c94e", "#f78145", "#f24e4e"],
  ["#59b390", "#f0ddaa", "#e47c5d", "#e32d40", "#152b3c"],
  ["#fdffd9", "#fff0b8", "#ffd6a3", "#faad8e", "#142f30"],
  ["#b5ac01", "#ecba09", "#e86e1c", "#d41e45", "#1b1521"],
  ["#c7fcd7", "#d9d5a7", "#d9ab91", "#e6867a", "#ed4a6a"],
  ["#11766d", "#410936", "#a40b54", "#e46f0a", "#f0b300"],
  ["#595643", "#4e6b66", "#ed834e", "#ebcc6e", "#ebe1c5"],
  ["#f1396d", "#fd6081", "#f3ffeb", "#acc95f", "#8f9924"],
  ["#331327", "#991766", "#d90f5a", "#f34739", "#ff6e27"],
  ["#efeecc", "#fe8b05", "#fe0557", "#400403", "#0aabba"],
  ["#bf496a", "#b39c82", "#b8c99d", "#f0d399", "#595151"],
  ["#b7cbbf", "#8c886f", "#f9a799", "#f4bfad", "#f5dabd"],
  ["#ffb884", "#f5df98", "#fff8d4", "#c0d1c2", "#2e4347"],
  ["#e5eaa4", "#a8c4a2", "#69a5a4", "#616382", "#66245b"],
  ["#e0eff1", "#7db4b5", "#ffffff", "#680148", "#000000"],
  ["#b1e6d1", "#77b1a9", "#3d7b80", "#270a33", "#451a3e"],
  ["#e4ded0", "#abccbd", "#7dbeb8", "#181619", "#e32f21"],
  ["#e9e0d1", "#91a398", "#33605a", "#070001", "#68462b"],
  ["#fc284f", "#ff824a", "#fea887", "#f6e7f7", "#d1d0d7"],
  ["#ffab07", "#e9d558", "#72ad75", "#0e8d94", "#434d53"],
  ["#6da67a", "#99a66d", "#a9bd68", "#b5cc6a", "#c0de5d"],
  ["#311d39", "#67434f", "#9b8e7e", "#c3ccaf", "#a51a41"],
  ["#cfb590", "#9e9a41", "#758918", "#564334", "#49281f"],
  ["#5cacc4", "#8cd19d", "#cee879", "#fcb653", "#ff5254"],
  ["#44749d", "#c6d4e1", "#ffffff", "#ebe7e0", "#bdb8ad"],
  ["#807462", "#a69785", "#b8faff", "#e8fdff", "#665c49"],
  ["#e7edea", "#ffc52c", "#fb0c06", "#030d4f", "#ceecef"],
  ["#ccf390", "#e0e05a", "#f7c41f", "#fc930a", "#ff003d"],
  ["#2b222c", "#5e4352", "#965d62", "#c7956d", "#f2d974"],
  ["#cc5d4c", "#fffec6", "#c7d1af", "#96b49c", "#5b5847"],
  ["#e4e4c5", "#b9d48b", "#8d2036", "#ce0a31", "#d3e4c5"],
  ["#e3e8cd", "#bcd8bf", "#d3b9a3", "#ee9c92", "#fe857e"],
  ["#360745", "#d61c59", "#e7d84b", "#efeac5", "#1b8798"],
  ["#ec4401", "#cc9b25", "#13cd4a", "#7b6ed6", "#5e525c"],
  ["#eb9c4d", "#f2d680", "#f3ffcf", "#bac9a9", "#697060"],
  ["#f2e8c4", "#98d9b6", "#3ec9a7", "#2b879e", "#616668"],
  ["#f5dd9d", "#bcc499", "#92a68a", "#7b8f8a", "#506266"],
  ["#fff3db", "#e7e4d5", "#d3c8b4", "#c84648", "#703e3b"],
  ["#041122", "#259073", "#7fda89", "#c8e98e", "#e6f99d"],
  ["#8d7966", "#a8a39d", "#d8c8b8", "#e2ddd9", "#f8f1e9"],
  ["#c6cca5", "#8ab8a8", "#6b9997", "#54787d", "#615145"],
  ["#1d1313", "#24b694", "#d22042", "#a3b808", "#30c4c9"],
  ["#4b1139", "#3b4058", "#2a6e78", "#7a907c", "#c9b180"],
  ["#2d1b33", "#f36a71", "#ee887a", "#e4e391", "#9abc8a"],
  ["#f0ffc9", "#a9da88", "#62997a", "#72243d", "#3b0819"],
  ["#429398", "#6b5d4d", "#b0a18f", "#dfcdb4", "#fbeed3"],
  ["#9d9e94", "#c99e93", "#f59d92", "#e5b8ad", "#d5d2c8"],
  ["#95a131", "#c8cd3b", "#f6f1de", "#f5b9ae", "#ee0b5b"],
  ["#322938", "#89a194", "#cfc89a", "#cc883a", "#a14016"],
  ["#540045", "#c60052", "#ff714b", "#eaff87", "#acffe9"],
  ["#79254a", "#795c64", "#79927d", "#aeb18e", "#e3cf9e"],
  ["#452e3c", "#ff3d5a", "#ffb969", "#eaf27e", "#3b8c88"],
  ["#2b2726", "#0a516d", "#018790", "#7dad93", "#bacca4"],
  ["#027b7f", "#ffa588", "#d62957", "#bf1e62", "#572e4f"],
  ["#fa6a64", "#7a4e48", "#4a4031", "#f6e2bb", "#9ec6b8"],
  ["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"],
  ["#f06d61", "#da825f", "#c4975c", "#a8ab7b", "#8cbf99"],
  ["#23192d", "#fd0a54", "#f57576", "#febf97", "#f5ecb7"],
  ["#f6d76b", "#ff9036", "#d6254d", "#ff5475", "#fdeba9"],
  ["#a3c68c", "#879676", "#6e6662", "#4f364a", "#340735"],
  ["#a32c28", "#1c090b", "#384030", "#7b8055", "#bca875"],
  ["#80a8a8", "#909d9e", "#a88c8c", "#ff0d51", "#7a8c89"],
  ["#6d9788", "#1e2528", "#7e1c13", "#bf0a0d", "#e6e1c2"],
  ["#373737", "#8db986", "#acce91", "#badb73", "#efeae4"],
  ["#e6b39a", "#e6cba5", "#ede3b4", "#8b9e9b", "#6d7578"],
  ["#280904", "#680e34", "#9a151a", "#c21b12", "#fc4b2a"],
  ["#4b3e4d", "#1e8c93", "#dbd8a2", "#c4ac30", "#d74f33"],
  ["#161616", "#c94d65", "#e7c049", "#92b35a", "#1f6764"],
  ["#234d20", "#36802d", "#77ab59", "#c9df8a", "#f0f7da"],
  ["#a69e80", "#e0ba9b", "#e7a97e", "#d28574", "#3b1922"],
  ["#641f5e", "#676077", "#65ac92", "#c2c092", "#edd48e"],
  ["#e6eba9", "#abbb9f", "#6f8b94", "#706482", "#703d6f"],
  ["#26251c", "#eb0a44", "#f2643d", "#f2a73d", "#a0e8b7"],
  ["#fdcfbf", "#feb89f", "#e23d75", "#5f0d3b", "#742365"],
  ["#ff7474", "#f59b71", "#c7c77f", "#e0e0a8", "#f1f1c1"],
  ["#4f364c", "#5e405f", "#6b6b6b", "#8f9e6f", "#b1cf72"],
  ["#230b00", "#a29d7f", "#d4cfa5", "#f8ecd4", "#aabe9b"],
  ["#d4f7dc", "#dbe7b4", "#dbc092", "#e0846d", "#f51441"],
  ["#62a07b", "#4f8b89", "#536c8d", "#5c4f79", "#613860"],
  ["#6f5846", "#a95a52", "#e35b5d", "#f18052", "#ffa446"],
  ["#85847e", "#ab6a6e", "#f7345b", "#353130", "#cbcfb4"],
  ["#ff3366", "#c74066", "#8f4d65", "#575a65", "#1f6764"],
  ["#d3d5b0", "#b5cea4", "#9dc19d", "#8c7c62", "#71443f"],
  ["#ffff99", "#d9cc8c", "#b39980", "#8c6673", "#663366"],
  ["#ed6464", "#bf6370", "#87586c", "#574759", "#1a1b1c"],
  ["#d24858", "#ea8676", "#eab05e", "#fdeecd", "#493831"],
  ["#f0f0d8", "#b4debe", "#77cca4", "#666666", "#b4df37"],
  ["#f3e7d7", "#f7d7cd", "#f8c7c9", "#e0c0c7", "#c7b9c5"],
  ["#ccb24c", "#f7d683", "#fffdc0", "#fffffd", "#457d97"],
  ["#1a081f", "#4d1d4d", "#05676e", "#489c79", "#ebc288"],
  ["#c46564", "#f0e999", "#b8c99d", "#9b726f", "#eeb15b"],
  ["#7a5b3e", "#fafafa", "#fa4b00", "#cdbdae", "#1f1f1f"],
  ["#eeda95", "#b7c27e", "#9a927b", "#8a6a6b", "#805566"],
  ["#d31900", "#ff6600", "#fff2af", "#7cb490", "#000000"],
  ["#e8c382", "#b39d69", "#a86b4c", "#7d1a0c", "#340a0b"],
  ["#ebeaa9", "#ebc588", "#7d2948", "#3b0032", "#0e0b29"],
  ["#566965", "#948a71", "#cc9476", "#f2a176", "#ff7373"],
  ["#595b5a", "#14c3a2", "#0de5a8", "#7cf49a", "#b8fd99"],
  ["#063940", "#195e63", "#3e838c", "#8ebdb6", "#ece1c3"],
  ["#411f2d", "#ac4147", "#f88863", "#ffc27f", "#ffe29a"],
  ["#9dbcbc", "#f0f0af", "#ff370f", "#332717", "#6bacbf"],
  ["#e7e79d", "#c0d890", "#78a890", "#606078", "#d8a878"],
  ["#94654c", "#f89fa1", "#fabdbd", "#fad6d6", "#fefcd0"],
  ["#cddbc2", "#f7e4c6", "#fb9274", "#f5565b", "#875346"],
  ["#f0ddbd", "#ba3622", "#851e25", "#520c30", "#1c997f"],
  ["#312c20", "#494d4b", "#7c7052", "#b3a176", "#e2cb92"],
  ["#029daf", "#e5d599", "#ffc219", "#f07c19", "#e32551"],
  ["#3f2c26", "#dd423e", "#a2a384", "#eac388", "#c5ad4b"],
  ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"],
  ["#ecbe13", "#738c79", "#6a6b5f", "#2c2b26", "#a43955"],
  ["#fff5de", "#b8d9c8", "#917081", "#750e49", "#4d002b"],
  ["#1f1f20", "#2b4c7e", "#567ebb", "#606d80", "#dce0e6"],
  ["#e7dd96", "#e16639", "#ad860a", "#b7023f", "#55024a"],
  ["#cdeccc", "#edd269", "#e88460", "#f23460", "#321d2e"],
  ["#574c41", "#e36b6b", "#e3a56b", "#e3c77b", "#96875a"],
  ["#dde0cf", "#c6be9a", "#ad8b32", "#937460", "#8c5b7b"],
  ["#213435", "#46685b", "#648a64", "#a6b985", "#e1e3ac"],
  ["#181419", "#4a073c", "#9e0b41", "#cc3e18", "#f0971c"],
  ["#413040", "#6c6368", "#b9a173", "#eaa353", "#ffefa9"],
  ["#4d3b36", "#eb613b", "#f98f6f", "#c1d9cd", "#f7eadc"],
  ["#ffcdb8", "#fdeecf", "#c8c696", "#97bea9", "#37260c"],
  ["#e8d3a9", "#e39b7d", "#6e6460", "#89b399", "#bcbfa3"],
  ["#ffffff", "#fffaeb", "#f0f0d8", "#cfcfcf", "#967c52"],
  ["#001449", "#012677", "#005bc5", "#00b4fc", "#17f9ff"],
  ["#ed5672", "#160e32", "#9eae8a", "#cdbb93", "#fbc599"],
  ["#130912", "#3e1c33", "#602749", "#b14623", "#f6921d"],
  ["#ffff00", "#ccd91a", "#99b333", "#668c4d", "#336666"],
  ["#4dab8c", "#542638", "#8f244d", "#c9306b", "#e86f9e"],
  ["#2b1719", "#02483e", "#057c46", "#9bb61b", "#f8be00"],
  ["#ffabab", "#ffdaab", "#ddffab", "#abe4ff", "#d9abff"],
  ["#e6a06f", "#9e9c71", "#5e8271", "#33454e", "#242739"],
  ["#67be9b", "#95d0b8", "#fcfcd7", "#f1db42", "#f04158"],
  ["#1693a5", "#45b5c4", "#7ececa", "#a0ded6", "#c7ede8"],
  ["#cc2649", "#992c4b", "#66324c", "#33384e", "#003e4f"],
  ["#e7eed0", "#cad1c3", "#948e99", "#51425f", "#2e1437"],
  ["#785d56", "#be4c54", "#c6b299", "#e6d5c1", "#fff4e3"],
  ["#f7f3d5", "#ffdabf", "#fa9b9b", "#e88087", "#635063"],
  ["#e25858", "#e9d6af", "#ffffdd", "#c0efd2", "#384252"],
  ["#acdeb2", "#e1eab5", "#edad9e", "#fe4b74", "#390d2d"],
  ["#42282c", "#6ca19e", "#84abaa", "#ded1b6", "#6d997a"],
  ["#a7cd2c", "#bada5f", "#cee891", "#e1f5c4", "#50c8c6"],
  ["#b2cba3", "#e0df9f", "#e7a83e", "#9a736e", "#ea525f"],
  ["#fc580c", "#fc6b0a", "#f8872e", "#ffa927", "#fdca49"],
  ["#fdffd9", "#73185e", "#36bba6", "#0c0d02", "#8b911a"],
  ["#9f0a28", "#d55c2b", "#f6e7d3", "#89a46f", "#55203c"],
  ["#8a8780", "#e6e5c4", "#d6d1af", "#e47267", "#d7d8c5"],
  ["#418e8e", "#5a4e3c", "#c4d428", "#d8e472", "#e9ebbf"],
  ["#a69a90", "#4a403d", "#fff1c1", "#facf7d", "#ea804c"],
  ["#faf6d0", "#c7d8ab", "#909a92", "#744f78", "#30091e"],
  ["#aadead", "#bbdead", "#ccdead", "#dddead", "#eedead"],
  ["#f0371a", "#000000", "#f7e6a6", "#3e6b48", "#b5b479"],
  ["#a7321c", "#ffdc68", "#cc982a", "#928941", "#352504"],
  ["#fa2e59", "#ff703f", "#f7bc05", "#ecf6bb", "#76bcad"],
  ["#f1e8b4", "#b2bb91", "#d7bf5e", "#d16344", "#83555e"],
  ["#afc7b9", "#ffe1c9", "#fac7b4", "#fca89d", "#998b82"],
  ["#f6c7b7", "#f7a398", "#fa7f77", "#b42529", "#000000"],
  ["#c9d1d3", "#f7f7f7", "#9dd3df", "#3b3737", "#991818"],
  ["#000000", "#001f36", "#1c5560", "#79ae92", "#fbffcd"],
  ["#e0dc8b", "#f6aa3d", "#ed4c57", "#574435", "#6cc4b9"],
  ["#42393b", "#75c9a3", "#bac99a", "#ffc897", "#f7efa2"],
  ["#f4f4f4", "#9ba657", "#f0e5c9", "#a68c69", "#594433"],
  ["#f2cc67", "#f38264", "#f40034", "#5f051f", "#75baa8"],
  ["#fbfee5", "#c91842", "#98173d", "#25232d", "#a8e7ca"],
  ["#dbd9b7", "#c1c9c8", "#a5b5ab", "#949a8e", "#615566"],
  ["#f3e6bc", "#f1c972", "#f5886b", "#72ae95", "#5a3226"],
  ["#674f23", "#e48b69", "#e1b365", "#e5db84", "#ffeeac"],
  ["#ff0092", "#ffca1b", "#b6ff00", "#228dff", "#ba01ff"],
  ["#d9d4a8", "#d15c57", "#cc3747", "#5c374b", "#4a5f67"],
  ["#998496", "#f7e0ae", "#fa748f", "#2d2c26", "#c3b457"],
  ["#fa8cb1", "#fdc5c9", "#fffee1", "#cfb699", "#9e6d4e"],
  ["#84c1b1", "#ad849a", "#d64783", "#fd135a", "#40202a"],
  ["#00ccbe", "#09a6a3", "#9dbfaf", "#edebc9", "#fcf9d8"],
  ["#020304", "#541f14", "#938172", "#cc9e61", "#626266"],
  ["#71dbd2", "#eeffdb", "#ade4b5", "#d0eaa3", "#fff18c"],
  ["#b88000", "#d56f00", "#f15500", "#ff2654", "#ff0c71"],
  ["#bf2a23", "#a6ad3c", "#f0ce4e", "#cf872e", "#8a211d"],
  ["#ffc870", "#f7f7c6", "#c8e3c5", "#9cad9a", "#755858"],
  ["#002c2b", "#ff3d00", "#ffbc11", "#0a837f", "#076461"],
  ["#244242", "#51bd9c", "#a3e3b1", "#ffe8b3", "#ff2121"],
  ["#4eb3de", "#8de0a6", "#fcf09f", "#f27c7c", "#de528c"],
  ["#001848", "#301860", "#483078", "#604878", "#906090"],
  ["#1f0310", "#442433", "#a3d95b", "#aae3ab", "#f6f0bc"],
  ["#b31237", "#f03813", "#ff8826", "#ffb914", "#2c9fa3"],
  ["#fffdc0", "#b9d7a1", "#fead26", "#ca221f", "#590f0c"],
  ["#4c3d31", "#f18273", "#f2bd76", "#f4f5de", "#c4ceb0"],
  ["#84bfc3", "#fff5d6", "#ffb870", "#d96153", "#000511"],
  ["#e2df9a", "#ebe54d", "#757449", "#4b490b", "#ff0051"],
  ["#b2b39f", "#c8c9b5", "#dedfc5", "#f5f7bd", "#3d423c"],
  ["#2f2bad", "#ad2bad", "#e42692", "#f71568", "#f7db15"],
  ["#651366", "#a71a5b", "#e7204e", "#f76e2a", "#f0c505"],
  ["#241811", "#d4a979", "#e3c88f", "#c2c995", "#a8bd95"],
  ["#2197a3", "#f71e6c", "#f07868", "#ebb970", "#e7d3b0"],
  ["#85a29e", "#ffebbf", "#f0d442", "#f59330", "#b22148"],
  ["#15212a", "#99c9bd", "#d7b89c", "#feab8d", "#f4c9a3"],
  ["#fe6c2b", "#d43b2d", "#9f102c", "#340016", "#020001"],
  ["#f88f89", "#eec276", "#fbf6d0", "#79c3aa", "#1f0e1a"],
  ["#ffffff", "#a1c1be", "#59554e", "#f3f4e5", "#e2e3d9"],
  ["#ccded2", "#fffbd4", "#f5ddbb", "#e3b8b2", "#a18093"],
  ["#79a687", "#718063", "#67594d", "#4f2b38", "#1d1016"],
  ["#45aab8", "#e1d772", "#faf4b1", "#394240", "#f06b50"],
  ["#e6e1cd", "#c6d8c0", "#d6b3b1", "#f97992", "#231b42"],
  ["#69d0b3", "#9bdab3", "#b4dfb3", "#cde4b3", "#d9cf85"],
  ["#332c26", "#db1414", "#e8591c", "#7fb8b0", "#c5e65c"],
  ["#75372d", "#928854", "#96a782", "#d4ce9e", "#d8523d"],
  ["#d1b68d", "#87555c", "#492d49", "#51445f", "#5a5c75"],
  ["#8e407a", "#fe6962", "#f9ba84", "#eee097", "#ffffe5"],
  ["#ffe4aa", "#fca699", "#e2869b", "#c9729f", "#583b7e"],
  ["#9e1e4c", "#ff1168", "#25020f", "#8f8f8f", "#ececec"],
  ["#272d4d", "#b83564", "#ff6a5a", "#ffb350", "#83b8aa"],
  ["#b5f4bc", "#fff19e", "#ffdc8a", "#ffba6b", "#ff6543"],
  ["#539fa2", "#72b1a4", "#abccb1", "#c4dbb4", "#d4e2b6"],
  ["#80d3bb", "#bafdc2", "#e5f3ba", "#5c493d", "#3a352f"],
  ["#5adb94", "#0ba18c", "#368986", "#8a034d", "#2e0331"],
  ["#101942", "#80043a", "#f60c49", "#f09580", "#fdf2b4"],
  ["#c9b849", "#c96823", "#be3100", "#6f0b00", "#241714"],
  ["#ff4746", "#e8da5e", "#92b55f", "#487d76", "#4b4452"],
  ["#a8bcbd", "#fcdcb3", "#f88d87", "#d65981", "#823772"],
  ["#002e34", "#004443", "#00755c", "#00c16c", "#90ff17"],
  ["#1f0a1d", "#334f53", "#45936c", "#9acc77", "#e5ead4"],
  ["#444444", "#fcf7d1", "#a9a17a", "#b52c00", "#8c0005"],
  ["#0fc3e8", "#0194be", "#e2d397", "#f07e13", "#481800"],
  ["#d8d8d8", "#e2d9d8", "#ecdad8", "#f5dbd8", "#ffdcd8"],
  ["#4b538b", "#15191d", "#f7a21b", "#e45635", "#d60257"],
  ["#c4ddd6", "#d4ddd6", "#e4ddd6", "#e4e3cd", "#ececdd"],
  ["#4d4a4b", "#f60069", "#ff41a1", "#ff90ab", "#ffccd1"],
  ["#899aa1", "#bda2a2", "#fbbe9a", "#fad889", "#faf5c8"],
  ["#000000", "#ff8830", "#d1b8a0", "#aeced2", "#cbdcdf"],
  ["#36173d", "#ff4845", "#ff745f", "#ffc55f", "#ffec5e"],
  ["#f8f8ec", "#aedd2b", "#066699", "#0a5483", "#02416d"],
  ["#184848", "#006060", "#007878", "#a8c030", "#f0f0d8"],
  ["#706767", "#e87474", "#e6a37a", "#d9c777", "#c0dbab"],
  ["#dacdbd", "#f2b8a0", "#ef97a3", "#df5c7e", "#d4486f"],
  ["#170132", "#361542", "#573e54", "#85ae72", "#bce1ab"],
  ["#e9dfcc", "#f3a36b", "#cd5b51", "#554865", "#352630"],
  ["#db5643", "#1c0f0e", "#70aa87", "#9fb38f", "#c5bd99"],
  ["#c8d197", "#d89845", "#c54b2c", "#473430", "#11baac"],
  ["#aab69b", "#9e906e", "#9684a3", "#8870ff", "#000000"],
  ["#000706", "#00272d", "#134647", "#0c7e7e", "#bfac8b"],
  ["#f1ecdf", "#d4c9ad", "#c7ba99", "#000000", "#f58723"],
  ["#565175", "#538a95", "#67b79e", "#ffb727", "#e4491c"],
  ["#fcfdeb", "#e3cebd", "#c1a2a0", "#725b75", "#322030"],
  ["#d7e8d5", "#e6f0af", "#e8ed76", "#ffcd57", "#4a3a47"],
  ["#288d85", "#b9d9b4", "#d18e8f", "#b05574", "#f0a991"],
  ["#260729", "#2a2344", "#495168", "#ccbd9e", "#d8ccb2"],
  ["#aef055", "#e0ffc3", "#25e4bc", "#3f8978", "#514442"],
  ["#affbff", "#d2fdfe", "#fefac2", "#febf97", "#fe6960"],
  ["#f7f799", "#e0d124", "#f0823f", "#bd374c", "#443a37"],
  ["#dbda97", "#efae54", "#ef6771", "#4b1d37", "#977e77"],
  ["#c8ce13", "#f8f5c1", "#349e97", "#2c0d1a", "#de1a72"],
  ["#b9113f", "#a8636e", "#97b59d", "#cfcca8", "#ffe3b3"],
  ["#ed7b83", "#ec8a90", "#eba2a4", "#e6d1ca", "#eee9c7"],
  ["#002930", "#ffffff", "#f8f0af", "#ac4a00", "#000000"],
  ["#913f33", "#ff705f", "#ffaa67", "#ffdfab", "#9fb9c2"],
  ["#edeccf", "#f1c694", "#dc6378", "#207178", "#101652"],
  ["#fee9a6", "#fec0ab", "#fa5894", "#660860", "#9380b7"],
  ["#d3c8b4", "#d4f1db", "#eecab1", "#fe6c63", "#240910"],
  ["#edd58f", "#c2bf92", "#66ac92", "#686077", "#641f5e"],
  ["#e04891", "#e1b7ed", "#f5e1e2", "#d1e389", "#b9de51"],
  ["#43777a", "#442432", "#c02948", "#d95b45", "#ecd079"],
  ["#4180ab", "#ffffff", "#8ab3cf", "#bdd1de", "#e4ebf0"],
  ["#f9d423", "#ede574", "#e1f5c4", "#add6bc", "#79b7b4"],
  ["#f4f8e6", "#f2e9e6", "#4a3d3d", "#ff6161", "#d8dec3"],
  ["#f9f6ec", "#88a1a8", "#502940", "#790614", "#0d0c0c"],
  ["#ffab03", "#fc7f03", "#fc3903", "#d1024e", "#a6026c"],
  ["#50232e", "#f77c3e", "#faba66", "#fce185", "#a2cca5"],
  ["#f9ebf2", "#f3e2e8", "#fcd7da", "#f58f9a", "#3c363b"],
  ["#ffffff", "#a1ac88", "#757575", "#464d70", "#000000"],
  ["#736558", "#fd65a0", "#fef5c6", "#aaf2e4", "#31d5de"],
  ["#f7f6e4", "#e2d5c1", "#5f3711", "#f6f6e2", "#d4c098"],
  ["#95de90", "#cef781", "#f7c081", "#ff7857", "#6b6b6b"],
  ["#f2502c", "#cad17a", "#fcf59b", "#91c494", "#c42311"],
  ["#b2d9f7", "#487aa1", "#3d3c3b", "#7c8071", "#dde3ca"],
  ["#f7dece", "#eed7c5", "#ccccbb", "#9ec4bb", "#2d2e2c"],
  ["#e3ba6a", "#bfa374", "#6d756a", "#4d686f", "#364461"],
  ["#686466", "#839cb5", "#96d7eb", "#b1e1e9", "#f2e4f9"],
  ["#f7f1e1", "#ffdbd7", "#ffb2c1", "#ce7095", "#855e6e"],
  ["#2e1e45", "#612a52", "#ba3259", "#ff695c", "#ccbca1"],
  ["#8dc9b5", "#f6f4c2", "#ffc391", "#ff695c", "#8c315d"],
  ["#0db2ac", "#f5dd7e", "#fc8d4d", "#fc694d", "#faba32"],
  ["#fffab3", "#a2e5d2", "#63b397", "#9dab34", "#2c2321"],
  ["#ebf2f2", "#d0f2e7", "#bcebdf", "#ade0db", "#d9dbdb"],
  ["#e4e6c3", "#88baa3", "#ba1e4a", "#63203d", "#361f2d"],
  ["#204b5e", "#426b65", "#baab6a", "#fbea80", "#fdfac7"],
  ["#dadad8", "#fe6196", "#ff2c69", "#1ea49d", "#cbe65b"],
  ["#910142", "#6c043c", "#210123", "#fef7d5", "#0ec0c1"],
  ["#ab505e", "#d9a071", "#cfc88f", "#a5b090", "#607873"],
  ["#43204a", "#7f1e47", "#422343", "#c22047", "#ea284b"],
  ["#482c21", "#a73e2b", "#d07e0e", "#e9deb0", "#2f615e"],
  ["#042608", "#2a5c0b", "#808f12", "#faedd9", "#ea2a15"],
  ["#ff275e", "#e6bc56", "#7f440a", "#6a9277", "#f8d9bd"],
  ["#3f324d", "#93c2b1", "#ffeacc", "#ff995e", "#de1d6a"],
  ["#ffc2ce", "#80b3ff", "#fd6e8a", "#a2122f", "#693726"],
  ["#f3d915", "#e9e4bb", "#bfd4b7", "#a89907", "#1a1c27"],
  ["#9c8680", "#eb5e7f", "#f98f6f", "#dbbf6b", "#c8eb6a"],
  ["#917f6e", "#efbc98", "#efd2be", "#efe1d1", "#d9ddcd"],
  ["#c72546", "#66424c", "#768a4f", "#b3c262", "#d5ca98"],
  ["#e6e8e3", "#d7dacf", "#bec3bc", "#8f9a9c", "#65727a"],
  ["#2f3559", "#9a5071", "#e394a7", "#f1bbbb", "#e6d8cb"],
  ["#63594d", "#b18272", "#c2b291", "#d6e4c3", "#eae3d1"],
  ["#e8de92", "#810e0b", "#febea3", "#fce5b1", "#f6f5da"],
  ["#f8f69f", "#bab986", "#7c7b6c", "#3e3e53", "#000039"],
  ["#c3dfd7", "#c8dfd2", "#cddfcd", "#d2dfc8", "#d7dfc3"],
  ["#172c3c", "#274862", "#995052", "#d96831", "#e6b33d"],
  ["#678d6c", "#fc7d23", "#fa3c08", "#bd0a41", "#772a53"],
  ["#dae2cb", "#96c3a6", "#6cb6a5", "#221d34", "#90425c"],
  ["#8c0e48", "#80ab99", "#e8dbad", "#b39e58", "#99822d"],
  ["#dbf73b", "#c0cc39", "#eb0258", "#a6033f", "#2b2628"],
  ["#f1ebeb", "#eee8e8", "#cacaca", "#24c0eb", "#5cceee"],
  ["#454545", "#743455", "#a22365", "#d11174", "#ff0084"],
  ["#796c86", "#74aa9b", "#91c68d", "#ece488", "#f6f5cd"],
  ["#7375a5", "#21a3a3", "#13c8b5", "#6cf3d5", "#2b364a"],
  ["#efac41", "#de8531", "#b32900", "#6c1305", "#330a04"],
  ["#fffbf0", "#968f4b", "#7a6248", "#ab9597", "#030506"],
  ["#31827c", "#95c68f", "#f7e9aa", "#fc8a80", "#fd4e6d"],
  ["#615050", "#776a6a", "#ad9a6f", "#f5f1e8", "#fcfcfc"],
  ["#f26b7a", "#f0f2dc", "#d9eb52", "#8ac7de", "#87796f"],
  ["#b877a8", "#b8008a", "#ff3366", "#ffcc33", "#ccff33"],
  ["#b9340b", "#cea45c", "#c5be8b", "#498379", "#3f261c"],
  ["#f4e196", "#a6bf91", "#5f9982", "#78576b", "#400428"],
  ["#72bca5", "#f4ddb4", "#f1ae2b", "#bc0b27", "#4a2512"],
  ["#ddcaa2", "#aebea3", "#b97479", "#d83957", "#4e5c69"],
  ["#141827", "#62455b", "#736681", "#c1d9d0", "#fffae3"],
  ["#2b9eb3", "#85cc9c", "#bcd9a0", "#edf79e", "#fafad7"],
  ["#cfb698", "#ff5d57", "#dd0b64", "#6f0550", "#401c2a"],
  ["#a8c078", "#a89048", "#a84818", "#61290e", "#330c0c"],
  ["#171133", "#581e44", "#c5485a", "#d4be99", "#e0ffcc"],
  ["#ebe5b2", "#f6f3c2", "#f7c69f", "#f89b7e", "#b5a28b"],
  ["#ff0f35", "#f86254", "#fea189", "#f3d5a5", "#bab997"],
  ["#20130a", "#142026", "#123142", "#3b657a", "#e9f0c9"],
  ["#bdbf90", "#35352b", "#e7e9c4", "#ec6c2b", "#feae4b"],
  ["#eeccbb", "#f1731f", "#e03e36", "#bd0d59", "#730662"],
  ["#ffcfad", "#ffe4b8", "#e6d1b1", "#b8aa95", "#5e5a54"],
  ["#ff9934", "#ffc018", "#f8fef4", "#cde54e", "#b3c631"],
  ["#d1dbc8", "#b8c2a0", "#c97c7a", "#da3754", "#1f1106"],
  ["#bda0a2", "#ffe6db", "#d1eaee", "#cbc8b5", "#efb0a9"],
  ["#4d433d", "#525c5a", "#56877d", "#8ccc81", "#bade57"],
  ["#262525", "#525252", "#e6ddbc", "#822626", "#690202"],
  ["#9d9f89", "#84af97", "#8bc59b", "#b2de93", "#ccee8d"],
  ["#52423c", "#ad5c70", "#d3ad98", "#edd4be", "#b9c3c4"],
  ["#353437", "#53576b", "#7a7b7c", "#a39b7e", "#e2c99f"],
  ["#a22c27", "#4f2621", "#9f8241", "#ebd592", "#929867"],
  ["#839074", "#939e78", "#a8a878", "#061013", "#cdcd76"],
  ["#eb9d8d", "#93865a", "#a8bb9a", "#c5cba6", "#efd8a9"],
  ["#6a3d5a", "#66666e", "#6d8d76", "#b0c65a", "#ebf74f"],
  ["#ff9966", "#d99973", "#b39980", "#8c998c", "#669999"],
  ["#d1dab9", "#92bea5", "#6f646c", "#671045", "#31233e"],
  ["#f9ded3", "#fdd1b6", "#fab4b6", "#c7b6be", "#89abb4"],
  ["#4b4b55", "#f4324a", "#ff516c", "#fb9c5a", "#fcc755"],
  ["#820081", "#fe59c2", "#fe40b9", "#fe1cac", "#390039"],
  ["#000000", "#ed0b65", "#b2a700", "#fcae11", "#770493"],
  ["#941f1f", "#ce6b5d", "#ffefb9", "#7b9971", "#34502b"],
  ["#482344", "#2b5166", "#429867", "#fab243", "#e02130"],
  ["#031c30", "#5a3546", "#b5485f", "#fc6747", "#fa8d3b"],
  ["#a9b79e", "#e8ddbd", "#dba887", "#c25848", "#9d1d36"],
  ["#666666", "#abdb25", "#999999", "#ffffff", "#cccccc"],
  ["#27081d", "#47232c", "#66997b", "#a4ca8b", "#d2e7aa"],
  ["#8fc9b9", "#d8d9c0", "#d18e8f", "#ab5c72", "#91334f"],
  ["#8ba6ac", "#d7d7b8", "#e5e6c9", "#f8f8ec", "#bdcdd0"],
  ["#ffe7bf", "#ffc978", "#c9c987", "#d1a664", "#c27b57"],
  ["#0c0636", "#095169", "#059b9a", "#53ba83", "#9fd86b"],
  ["#f3dcb2", "#facb97", "#f59982", "#ed616f", "#f2116c"],
  ["#ff3366", "#e64066", "#cc4d66", "#b35966", "#996666"],
  ["#fdf4b0", "#a4dcb9", "#5bcebf", "#32b9be", "#2e97b7"],
  ["#302727", "#ba2d2d", "#f2511b", "#f2861b", "#c7c730"],
  ["#fdbf5c", "#f69a0b", "#d43a00", "#9b0800", "#1d2440"],
  ["#dfd0af", "#e8acac", "#a45785", "#85586c", "#a1c0a1"],
  ["#f3214e", "#cf023b", "#000000", "#f4a854", "#fff8bc"],
  ["#ec4b59", "#9a2848", "#130716", "#fc8c77", "#f8dfbd"],
  ["#1f0b0c", "#e7fccf", "#d6c396", "#b3544f", "#300511"],
  ["#6e9167", "#ffdd8c", "#ff8030", "#cc4e00", "#700808"],
  ["#332e1d", "#5ac7aa", "#9adcb9", "#fafcd3", "#efeba9"],
  ["#adeada", "#bdeadb", "#cdeadc", "#ddeadd", "#edeade"],
  ["#ffad08", "#edd75a", "#73b06f", "#0c8f8f", "#405059"],
  ["#295264", "#fad9a6", "#bd2f28", "#89373d", "#142433"],
  ["#331436", "#7a1745", "#cb4f57", "#eb9961", "#fcf4b6"],
  ["#fef0a5", "#f8d28b", "#e3b18b", "#a78d9e", "#74819d"],
  ["#f7ead9", "#e1d2a9", "#88b499", "#619885", "#67594e"],
  ["#210518", "#3d1c33", "#5e4b55", "#7c917f", "#93bd9a"],
  ["#ecf8d4", "#e0deab", "#cb8e5f", "#85685a", "#0d0502"],
  ["#a2c7bb", "#dde29f", "#ac8d49", "#ac0d0d", "#320606"],
  ["#fce7d2", "#e0dbbd", "#c0ceaa", "#fd8086", "#eb5874"],
  ["#ff667c", "#fbbaa4", "#f9e5c0", "#2c171c", "#b6d0a0"],
  ["#fcf3e3", "#ed4c87", "#63526e", "#6cbaa4", "#f2ad5e"],
  ["#a8ab84", "#000000", "#c6c99d", "#0c0d05", "#e7ebb0"],
  ["#940533", "#c0012a", "#f5061d", "#ff8800", "#ffb300"],
  ["#d45e80", "#c6838c", "#cfbf9e", "#f7dea8", "#f6be5f"],
  ["#d6d578", "#b1bf63", "#9dad42", "#258a60", "#0a3740"],
  ["#a6988a", "#88a19f", "#6aabb5", "#4bb4ca", "#1ec3ea"],
  ["#470d3b", "#7e2f56", "#c0576f", "#e48679", "#febd84"],
  ["#99cccc", "#a8bdc2", "#b8aeb8", "#c79ead", "#d78fa3"],
  ["#d1f7ba", "#dbdea6", "#d1bd95", "#8c686b", "#391b4a"],
  ["#3f264d", "#5d2747", "#9f3647", "#db4648", "#fb9553"],
  ["#ffffff", "#ff97ca", "#ff348e", "#be0049", "#770021"],
  ["#e1e6e3", "#bfd6c7", "#c7bd93", "#ff7876", "#574b45"],
  ["#abece4", "#c4d004", "#ff9f15", "#fb7991", "#926d40"],
  ["#1c0b2b", "#301c41", "#413b6b", "#5c65c0", "#6f95ff"],
  ["#0ccaba", "#e3f5b7", "#e6ae00", "#d46700", "#9e3f00"],
  ["#b7aea5", "#f77014", "#e33c08", "#433d3d", "#221d21"],
  ["#fb6f24", "#8ca315", "#5191c1", "#1e6495", "#0a4b75"],
  ["#2c2b4b", "#a75293", "#9c7a9d", "#9ddacb", "#f8dcb4"],
  ["#de4c45", "#d9764d", "#cc9e8a", "#c1c5c7", "#ebdfc6"],
  ["#d24d6c", "#ad8484", "#d9d5bb", "#c1858f", "#b05574"],
  ["#060212", "#fe5412", "#fc1a1a", "#795c06", "#4f504f"],
  ["#d9d9db", "#b7ae8f", "#978f84", "#4a362f", "#121210"],
  ["#e9d7a9", "#d2d09f", "#d5a57f", "#b56a65", "#4b3132"],
  ["#ff7a24", "#ff6d54", "#f76d75", "#e8728f", "#c97ba5"],
  ["#7f135f", "#a0667a", "#c2b895", "#c4cab0", "#c7dcca"],
  ["#5d917d", "#fff9de", "#cdd071", "#b81c48", "#632739"],
  ["#ffe6bd", "#ffcc7a", "#e68a6c", "#8a2f62", "#260016"],
  ["#fcd8af", "#fec49b", "#fe9b91", "#fd6084", "#045071"],
  ["#f4fce2", "#d3ebc7", "#aabfaa", "#bf9692", "#fc0284"],
  ["#3c515d", "#3d6868", "#40957f", "#a7c686", "#fcee8c"],
  ["#d46419", "#b34212", "#341405", "#166665", "#83870e"],
  ["#f19601", "#f21f26", "#251819", "#ebc83a", "#73b295"],
  ["#27191c", "#2d3839", "#114d4d", "#6e9987", "#e0e4ce"],
  ["#c3b68c", "#6e5b54", "#b94866", "#afb7a0", "#f4eed4"],
  ["#f6eddc", "#e3e5d7", "#bdd6d2", "#a5c8ca", "#586875"],
  ["#88d1ca", "#ded6c9", "#e68a2e", "#c90a00", "#452b34"],
  ["#edf3c5", "#f2cc49", "#b7be5f", "#24b399", "#2d1c28"],
  ["#200e38", "#6a0e47", "#b50d57", "#ff0d66", "#dec790"],
  ["#ebebab", "#78bd91", "#4d8f81", "#9b4b54", "#f22b56"],
  ["#efece2", "#81d7cd", "#ff0048", "#b13756", "#5b1023"],
  ["#95aa61", "#121310", "#f6f8ee", "#d6e68a", "#899752"],
  ["#0d0210", "#4d3147", "#866a80", "#c9b7c7", "#fffbff"],
  ["#fffff7", "#e9fccf", "#d8fcb3", "#b1fcb3", "#89fcb3"],
  ["#1a2b2b", "#332222", "#4d1a1a", "#661111", "#800909"],
  ["#f7f0ba", "#e0dba4", "#a9cba6", "#7ebea3", "#53a08e"],
  ["#fcf9ce", "#c4e0a6", "#dea37a", "#bd3737", "#d54c4a"],
  ["#f8db7e", "#ec6349", "#ce2340", "#6f1b2c", "#310a26"],
  ["#689195", "#050000", "#ab8288", "#cea4a6", "#ffcdc5"],
  ["#b6d9c3", "#c6a9ac", "#d48299", "#e64e81", "#fd0a60"],
  ["#551bb3", "#268fbe", "#2cb8b2", "#3ddb8f", "#a9f04d"],
  ["#7e949e", "#aec2ab", "#ebcea0", "#fc7765", "#ff335f"],
  ["#fcf6d2", "#fcf6d2", "#fbe2b9", "#c6c39a", "#281f20"],
  ["#f5c8bf", "#e0d2c5", "#cad9ca", "#a7e3c1", "#495453"],
  ["#8d1042", "#a25d47", "#a08447", "#97aa66", "#b8b884"],
  ["#f9f9e7", "#505045", "#161613", "#c0a1ae", "#c1e0e0"],
  ["#cad5ad", "#f9df94", "#f6a570", "#e77a77", "#54343f"],
  ["#73c5aa", "#c6c085", "#f9a177", "#f76157", "#4c1b05"],
  ["#cf3a69", "#8f4254", "#7caa96", "#b6c474", "#d4d489"],
  ["#f5ea95", "#fc8e5b", "#fc5956", "#c93e4f", "#3d1734"],
  ["#16c1c8", "#49cccc", "#7cd7cf", "#aee1d3", "#e1ecd6"],
  ["#807070", "#9a8fc8", "#8dbdeb", "#a5e6c8", "#d9f5b5"],
  ["#1f2f3a", "#98092b", "#df931b", "#e0daa3", "#9fb982"],
  ["#020202", "#493d3f", "#bdb495", "#f8f2ce", "#d8d989"],
  ["#d8f5d1", "#9ddbca", "#92b395", "#726c81", "#565164"],
  ["#0f132e", "#19274e", "#536d88", "#b49b85", "#eac195"],
  ["#e85a50", "#feffd6", "#5bb7b6", "#010002", "#fdf37a"],
  ["#939473", "#4f784e", "#2d5e4c", "#13444d", "#252326"],
  ["#bfe4cd", "#ddb37d", "#fa8331", "#fb4848", "#fd0a60"],
  ["#f0f0d8", "#d8d8c0", "#7a8370", "#df8615", "#f84600"],
  ["#ef4335", "#f68b36", "#f2cd4f", "#cae081", "#88eed0"],
  ["#04394e", "#00875e", "#a7cc15", "#f5cc17", "#f56217"],
  ["#5a3938", "#847b6d", "#a3ab98", "#d2d5af", "#dfa49b"],
  ["#75727a", "#997f87", "#b88c87", "#d39679", "#f3a76d"],
  ["#b68810", "#301406", "#7f9473", "#d3c795", "#c02c20"],
  ["#423431", "#f70b17", "#050000", "#9a8c29", "#e7cba4"],
  ["#f6b149", "#f8572d", "#df2a33", "#a22543", "#6b312d"],
  ["#404467", "#5c627a", "#a3b6a2", "#b2ccaf", "#fffaac"],
  ["#4a3333", "#e1473f", "#9a9088", "#80b0ab", "#dbd1b3"],
  ["#9e9e9e", "#5ecde0", "#00fff2", "#c4ffc9", "#e0e0e0"],
  ["#2f1335", "#620e5d", "#9d007a", "#ce3762", "#ff6e49"],
  ["#ff8591", "#efaaa3", "#8caaa2", "#5a9b95", "#44878f"],
  ["#524e4e", "#ff2b73", "#ff5a6a", "#ff9563", "#ffcd37"],
  ["#0f7d7e", "#76b5a0", "#fffdd1", "#ff7575", "#d33649"],
  ["#3e3742", "#825e65", "#cc8383", "#ebc4a9", "#e6e0c5"],
  ["#eec77a", "#e77155", "#c71755", "#7b3336", "#5b9b9a"],
  ["#d0dccb", "#d7c7be", "#b3c5ba", "#88c3b5", "#6d6168"],
  ["#f7f4e8", "#daf3ea", "#85e6c0", "#6bb39b", "#0b0b0d"],
  ["#541e35", "#df5d2e", "#ffb43e", "#a4c972", "#6bb38e"],
  ["#c39738", "#ffff96", "#7f4311", "#5e4318", "#361f00"],
  ["#d94052", "#ee7e4c", "#ead56c", "#94c5a5", "#898b75"],
  ["#741952", "#fe3174", "#f1c15d", "#94bb68", "#09a3ad"],
  ["#ffffff", "#000000", "#ff006f", "#ffb300", "#fff538"],
  ["#516d7d", "#2a728e", "#9d870c", "#f93f03", "#f9eee2"],
  ["#220114", "#811628", "#bd3038", "#ff7e57", "#f8b068"],
  ["#33242b", "#e30842", "#fc4630", "#ff9317", "#c4ff0d"],
  ["#f1ffd5", "#d6e6b7", "#a35481", "#b8136f", "#ea0063"],
  ["#58534c", "#f1d3ab", "#dbce79", "#f95842", "#0eaeab"],
  ["#fb545c", "#99662d", "#b7e1a1", "#cdeda1", "#fdf5a4"],
  ["#ffeec2", "#fe9e8e", "#f80174", "#c4037a", "#322c8e"],
  ["#fe9600", "#ffc501", "#ffee4a", "#77477e", "#03001c"],
  ["#cb6f84", "#291d21", "#5d544d", "#cfccbb", "#e1daca"],
  ["#ff8d7b", "#c88984", "#947280", "#d6b58c", "#dcd392"],
  ["#22806b", "#a89f1d", "#facb4b", "#fcaf14", "#ed7615"],
  ["#e0dcb8", "#c4bc16", "#918f61", "#c21f40", "#302c25"],
  ["#79aba2", "#b4b943", "#b7833a", "#a04b26", "#301e1a"],
  ["#3b3e37", "#e19563", "#9fb39b", "#d39088", "#f0ddb5"],
  ["#cbdad5", "#89a7b1", "#566981", "#3a415a", "#34344e"],
  ["#281b24", "#d02941", "#f57e67", "#d9c9a5", "#8cab94"],
  ["#ebe7a7", "#a7ebc9", "#78b395", "#917c67", "#5e5953"],
  ["#582770", "#773d94", "#943d8a", "#c22760", "#e81764"],
  ["#b19676", "#766862", "#92bf9f", "#e3d49c", "#f9f0b7"],
  ["#fef1e0", "#f6e6ce", "#3b2e2a", "#3f0632", "#a47f1a"],
  ["#670d0f", "#f01945", "#f36444", "#ffce6f", "#ffe3c9"],
  ["#555231", "#9c8c51", "#bcac71", "#e9db9c", "#79927d"],
  ["#d3dbd9", "#a4bdbc", "#ffdabf", "#ffbf91", "#ff9a52"],
  ["#d2d2d2", "#58afb8", "#269199", "#ec225e", "#020305"],
  ["#f5d393", "#f39772", "#eb6765", "#261329", "#1a0b2a"],
  ["#af0745", "#fa4069", "#fe9c6b", "#fcda90", "#c8b080"],
  ["#fe958f", "#f3d7c2", "#8bb6a3", "#17a7a8", "#122f51"],
  ["#2a1e1e", "#503850", "#aa6581", "#f99fa9", "#ffc5c1"],
  ["#281916", "#e86786", "#f4a1b5", "#ffd2cb", "#96b5ad"],
  ["#e4f3d8", "#afcacc", "#ffa02e", "#e80560", "#331d4a"],
  ["#fff4ce", "#d0deb8", "#ffa492", "#ff7f81", "#ff5c71"],
  ["#8e3f65", "#73738d", "#72a5ae", "#98e9d0", "#d8ffcc"],
  ["#d2fae2", "#e6f8b1", "#f6d5ad", "#f6b794", "#e59da0"],
  ["#ad2003", "#e0e6ae", "#bdd3b6", "#836868", "#5f0609"],
  ["#942222", "#bd3737", "#d4cdad", "#98c3a1", "#25857d"],
  ["#3d2304", "#7f6000", "#deb069", "#c41026", "#3d0604"],
  ["#001f21", "#029b99", "#ebe7b7", "#de4f15", "#ecc039"],
  ["#fb6a3d", "#fbe5ac", "#361d20", "#a2bc97", "#f7cd67"],
  ["#81749c", "#4d3e6b", "#8daec3", "#c5dfe0", "#fcfce2"],
  ["#8e978d", "#97c4ad", "#bfedbe", "#e6fcd9", "#cdf2d6"],
  ["#5e3848", "#666163", "#a7b381", "#cad197", "#cde0bf"],
  ["#817a8a", "#cdbbbb", "#fcddc8", "#fffeea", "#efcaba"],
  ["#160d18", "#23145b", "#09456c", "#026f6e", "#1ca39e"],
  ["#907071", "#7bbda1", "#a4d9a3", "#c6d7a0", "#fbdcb0"],
  ["#420b58", "#fc036c", "#f1a20b", "#8d9c09", "#08807b"],
  ["#cc8f60", "#b7a075", "#9eb48e", "#8cc2a0", "#77d4b6"],
  ["#3a3232", "#d83018", "#f07848", "#fdfcce", "#c0d8d8"],
  ["#cf0638", "#fa6632", "#fecd23", "#0a996f", "#0a6789"],
  ["#ff4000", "#ffefb5", "#319190", "#ffc803", "#260d0d"],
  ["#4acabb", "#cbe5c0", "#fcf9c2", "#edc5bd", "#84407b"],
  ["#c75f77", "#fefab6", "#77a493", "#836177", "#654b49"],
  ["#d1dc5a", "#e0f7e0", "#77f2de", "#6ac5cb", "#45444e"],
  ["#400e28", "#992f4d", "#f25872", "#f08e73", "#e8b787"],
  ["#6c788e", "#a6aec1", "#cfd5e1", "#ededf2", "#fcfdff"],
  ["#96b5a6", "#fce1cb", "#febeac", "#4e383d", "#d9434f"],
  ["#d6496c", "#7db8a2", "#d6dd90", "#fffad3", "#7e638c"],
  ["#a2825c", "#88d3ab", "#f9fad2", "#f5da7a", "#ff985e"],
  ["#ec6363", "#ec7963", "#ecb163", "#dfd487", "#bdebca"],
  ["#282832", "#77181e", "#a92727", "#c6d6d6", "#dee7e7"],
  ["#1c31a5", "#101f78", "#020f59", "#010937", "#000524"],
  ["#2f2e30", "#e84b2c", "#e6d839", "#7cd164", "#2eb8ac"],
  ["#becec4", "#688a7c", "#9d7c5b", "#e35241", "#e49183"],
  ["#cdb27b", "#de7c04", "#e4211b", "#c00353", "#5e2025"],
  ["#2a0308", "#924f1b", "#e2ac3f", "#f8ebbe", "#7ba58d"],
  ["#966c80", "#96bda8", "#bfd4ad", "#f7d3a3", "#eca36c"],
  ["#9aedb5", "#ab9a89", "#a3606d", "#4f2d4b", "#291e40"],
  ["#636363", "#85827e", "#d1b39f", "#ffecd1", "#ffd1b3"],
  ["#4d4d4d", "#637566", "#a39c67", "#d69e60", "#ff704d"],
  ["#efd8a4", "#e8ae96", "#e49d89", "#e47f83", "#a8c99e"],
  ["#281a1a", "#4e2d28", "#70454e", "#ae736f", "#dda8b0"],
  ["#f2f2f2", "#348e91", "#1c5052", "#213635", "#0a0c0d"],
  ["#c9ad9b", "#ffbda1", "#e05576", "#703951", "#452a37"],
  ["#e0be7e", "#e89d10", "#db4b23", "#382924", "#136066"],
  ["#40122c", "#656273", "#59baa9", "#d8f171", "#fcffd9"],
  ["#1a110e", "#4e051c", "#f7114b", "#c4b432", "#bcb7ab"],
  ["#f0debb", "#59a87d", "#16453f", "#091c1a", "#541734"],
  ["#8d9c9d", "#e00b5b", "#f5b04b", "#fcdfbd", "#45373e"],
  ["#eeaeaa", "#daaeaa", "#c6aeaa", "#b2aeaa", "#9eaeaa"],
  ["#f67968", "#f67968", "#f68c68", "#f68c68", "#f6a168"],
  ["#ef7270", "#ee9f80", "#f3ecbe", "#cdaf7b", "#59291b"],
  ["#2a8b8b", "#75c58e", "#bfff91", "#dfe9a8", "#ffd2bf"],
  ["#b0da09", "#f99400", "#f00a5e", "#b80090", "#544f51"],
  ["#f5e1a4", "#d9d593", "#ee7f27", "#bc162a", "#302325"],
  ["#93ba85", "#bda372", "#f49859", "#ff494b", "#5e363f"],
  ["#eda08c", "#876f55", "#a19153", "#b1b080", "#b1ceaf"],
  ["#fb7968", "#f9c593", "#fafad4", "#b0d1b2", "#89b2a2"],
  ["#c0b19e", "#ffb48f", "#f68b7b", "#f6464a", "#911440"],
  ["#ffffe5", "#dffda7", "#6ecf42", "#31a252", "#6b456c"],
  ["#c92c2c", "#cf6123", "#f3c363", "#f1e9bb", "#5c483a"],
  ["#ffffc2", "#f0ffc2", "#e0ffc2", "#d1ffc2", "#c2ffc2"],
  ["#ffffff", "#5e9188", "#3e5954", "#253342", "#232226"],
  ["#110303", "#c3062c", "#ff194b", "#8fa080", "#708066"],
  ["#96958a", "#76877d", "#88b8a9", "#b2cbae", "#dbddb4"],
  ["#fff7bc", "#fee78a", "#f8a348", "#e15244", "#3a7b50"],
  ["#faf4e0", "#d2ff1f", "#ffc300", "#ff6a00", "#3b0c2c"],
  ["#2b2318", "#524835", "#56704b", "#5d9e7e", "#78b3a4"],
  ["#615c5c", "#e30075", "#ff4a4a", "#ffb319", "#ebe8e8"],
  ["#f46472", "#f2ecc3", "#fff9d8", "#bed6ab", "#999175"],
  ["#3b5274", "#9c667d", "#ce938b", "#e8cc9c", "#e3e1b1"],
  ["#092b5a", "#09738a", "#78a890", "#9ed1b7", "#e7d9b4"],
  ["#cde9ca", "#ced89d", "#dfba74", "#e8a249", "#575e55"],
  ["#2f2c2b", "#413726", "#79451d", "#d7621a", "#fd8d32"],
  ["#b7b09e", "#493443", "#eb6077", "#f0b49e", "#f0e2be"],
  ["#d0d167", "#fffcff", "#e6dddc", "#ff0c66", "#969ba2"],
  ["#010d23", "#03223f", "#038bbb", "#fccb6f", "#e19f41"],
  ["#30182b", "#f0f1bc", "#60f0c0", "#ff360e", "#191f04"],
  ["#d8c358", "#6d0839", "#d0e799", "#25271e", "#fbeff4"],
  ["#f28a49", "#f7e3b2", "#e3967d", "#57342d", "#9dbfa4"],
  ["#2f003f", "#be0001", "#ff8006", "#f3c75f", "#e9cfaa"],
  ["#504375", "#39324d", "#ffe8ef", "#c22557", "#ed5887"],
  ["#beed80", "#59d999", "#31ada1", "#51647a", "#453c5c"],
  ["#d8d3ab", "#b0b19f", "#784d5f", "#ba456a", "#d04969"],
  ["#548c82", "#d1ce95", "#fcfade", "#d55d63", "#452d3d"],
  ["#becb7c", "#84967e", "#962c4c", "#f05d67", "#faa191"],
  ["#89666d", "#d2c29f", "#e3a868", "#f76f6d", "#f2306d"],
  ["#07f9a2", "#09c184", "#0a8967", "#0c5149", "#0d192b"],
  ["#c3aaa5", "#d76483", "#ef9ca4", "#ffc2bb", "#f6e5cb"],
  ["#c3d297", "#ffffff", "#c3b199", "#3a2d19", "#e8373e"],
  ["#f7e6be", "#e89a80", "#a93545", "#4d4143", "#485755"],
  ["#fdf2c5", "#efe8b2", "#c6d1a6", "#82bfa0", "#7a6f5d"],
  ["#f00065", "#fa9f43", "#f9fad2", "#262324", "#b3dbc8"],
  ["#dfcccc", "#ffd3d3", "#ffa4a4", "#d17878", "#965959"],
  ["#a1a6aa", "#bd928b", "#de7571", "#ff4e44", "#282634"],
  ["#fdec6f", "#f2e9b0", "#ecdfdb", "#ede3fb", "#fedfae"],
  ["#4aedd7", "#705647", "#ed6d4a", "#ffca64", "#3fd97f"],
  ["#352640", "#92394b", "#a9767a", "#d1b4a2", "#f1f2ce"],
  ["#330708", "#e84624", "#e87624", "#e8a726", "#e8d826"],
  ["#fb6066", "#ffefc1", "#fdd86e", "#ffa463", "#f66b40"],
  ["#62462a", "#01ffac", "#8ff638", "#a2fa1b", "#855d46"],
  ["#f7c097", "#829d74", "#de3c2f", "#eb5f07", "#f18809"],
  ["#aaaa91", "#848478", "#5e5e5e", "#383845", "#12122b"],
  ["#3b0503", "#f67704", "#f85313", "#fedc57", "#9ecfbc"],
  ["#140d1a", "#42142a", "#ff2e5f", "#ffd452", "#faeeca"],
  ["#7ebeb2", "#d1f3db", "#da9c3c", "#bc1953", "#7d144c"],
  ["#678c99", "#b8c7cc", "#fff1cf", "#d6c292", "#b59e67"],
  ["#21203f", "#fff1ce", "#e7bfa5", "#c5a898", "#4b3c5d"],
  ["#81657e", "#3ea3af", "#9fd9b3", "#f0f6b9", "#ff1d44"],
  ["#368986", "#e79a32", "#f84339", "#d40f60", "#005c81"],
  ["#fcf7d7", "#fea667", "#ffe461", "#c4c776", "#f4d092"],
  ["#e8608c", "#71cbc4", "#fff9f4", "#cdd56e", "#ffbd68"],
  ["#ff5252", "#ff7752", "#ff9a52", "#ffb752", "#5e405b"],
  ["#d5d8c7", "#d4d6ce", "#d3d5d5", "#d1d3dc", "#d0d2e3"],
  ["#829b86", "#96b7a2", "#a6aa56", "#b4b969", "#dfdb9c"],
  ["#050003", "#496940", "#93842f", "#ffa739", "#fce07f"],
  ["#382a2a", "#ff3d3d", "#ff9d7d", "#e5ebbc", "#8dc4b7"],
  ["#3d0a49", "#5015bd", "#027fe9", "#00caf8", "#e0daf7"],
  ["#edffb3", "#99928e", "#bfe3c3", "#dbedc2", "#fff2d4"],
  ["#471754", "#991d5d", "#f2445e", "#f07951", "#dec87a"],
  ["#f2ecdc", "#574345", "#e3dacb", "#c5ffe5", "#f5eed4"],
  ["#d4cdc5", "#5b88a5", "#f4f4f2", "#191013", "#243a69"],
  ["#a6e094", "#e8e490", "#f07360", "#bf2a7f", "#5c3d5b"],
  ["#622824", "#2f0618", "#412a9c", "#1b66ff", "#00cef5"],
  ["#10100f", "#26503c", "#849112", "#9d4e0f", "#840943"],
  ["#fffec7", "#e1f5c4", "#9dc9ac", "#919167", "#ff4e50"],
  ["#dacdac", "#f39708", "#f85741", "#0e9094", "#1e1801"],
  ["#46294a", "#ad4c6b", "#e07767", "#e0ae67", "#d4e067"],
  ["#ff9b8f", "#ef7689", "#9e6a90", "#766788", "#71556b"],
  ["#5e0324", "#692764", "#7b7893", "#7fb1a8", "#94f9bf"],
  ["#2b2c30", "#35313b", "#453745", "#613c4c", "#ff1457"],
  ["#f8dac2", "#f2a297", "#f4436f", "#ca1444", "#142738"],
  ["#92b2a7", "#6e7b8c", "#b69198", "#efa09b", "#e7c7b0"],
  ["#e1edd1", "#aab69b", "#9e906e", "#b47941", "#cf391d"],
  ["#e5e6b8", "#c6d4b8", "#6ca6a3", "#856a6a", "#9c325c"],
  ["#e81e4a", "#0b1d21", "#078a85", "#68baab", "#edd5c5"],
  ["#6ea49b", "#d9d0ac", "#6b8f0b", "#7d3f60", "#372b2e"],
  ["#333237", "#fb8351", "#ffad64", "#e9e2da", "#add4d3"],
  ["#e4ffd4", "#ebe7a7", "#edc68e", "#a49e7e", "#6e8f85"],
  ["#f2e7d2", "#f79eb1", "#ae8fba", "#4c5e91", "#473469"],
  ["#fe495f", "#fe9d97", "#fffec8", "#d8fd94", "#bded7e"],
  ["#240f03", "#4b2409", "#bd7a22", "#e79022", "#df621c"],
  ["#f5f5f5", "#e9e9e9", "#006666", "#008584", "#cccccc"],
  ["#fa7785", "#24211a", "#d5d87d", "#b1d4b6", "#53cbbf"],
  ["#37ab98", "#80bc96", "#a6c88c", "#e1ce8a", "#37053b"],
  ["#3b331f", "#ed6362", "#ff8e65", "#dceb5b", "#58ce74"],
  ["#db3026", "#e88a25", "#f9e14b", "#efed89", "#7abf66"],
  ["#24434b", "#fc325b", "#fa7f4b", "#bfbc84", "#63997a"],
  ["#06d9b6", "#a4f479", "#d4d323", "#d13775", "#9c3c86"],
  ["#260d33", "#003f69", "#106b87", "#157a8c", "#b3aca4"],
  ["#d6ce8b", "#8fd053", "#02907d", "#03453d", "#2c1001"],
  ["#402b30", "#faddb4", "#f4c790", "#f2977e", "#ba6868"],
  ["#f5e3ae", "#fff5d6", "#e1e6d3", "#b1ccc4", "#4e5861"],
  ["#3b4344", "#51615b", "#bbbd91", "#f06f6b", "#f12f5d"],
  ["#85b394", "#a7ba59", "#f0f0d8", "#f0d890", "#ae2f27"],
  ["#af162a", "#95003a", "#830024", "#5a0e3d", "#44021e"],
  ["#b9030f", "#9e0004", "#70160e", "#161917", "#e1e3db"],
  ["#070705", "#3e4b51", "#6f737e", "#89a09a", "#c1c0ae"],
  ["#e4a691", "#f7efd8", "#c8c8a9", "#556270", "#273142"],
  ["#9cd6c8", "#f1ffcf", "#f8df82", "#fac055", "#e57c3a"],
  ["#fbe4ae", "#dacb8a", "#897632", "#392e0e", "#6bb88a"],
  ["#c1ddc7", "#f5e8c6", "#bbcd77", "#dc8051", "#f4d279"],
  ["#a7848b", "#b88f93", "#f5d5c6", "#f9efd4", "#b8cabe"],
  ["#585d5d", "#e06f72", "#e7a17a", "#e4b17d", "#d1cbc0"],
  ["#4e3150", "#c7777f", "#b6dec1", "#d6ecdf", "#fbf6b5"],
  ["#259b9b", "#6fbcaa", "#b8d6b0", "#feedbf", "#ff1964"],
  ["#e6626f", "#efae78", "#f5e19c", "#a2ca8e", "#66af91"],
  ["#efe2bf", "#f5a489", "#ef8184", "#a76378", "#a8c896"],
  ["#17181f", "#314d4a", "#0b8770", "#a6c288", "#ebe68d"],
  ["#02fcf3", "#a9e4cf", "#cae0c8", "#deddc4", "#e8e7d2"],
  ["#801245", "#f4f4dd", "#dcdbaf", "#5d5c49", "#3d3d34"],
  ["#878286", "#88b6a3", "#bdba9e", "#e2c18d", "#e2bb64"],
  ["#e5e5e5", "#f1dbda", "#fcd0cf", "#cfbdbf", "#a2a9af"],
  ["#e7ddd3", "#c0c2bd", "#9c9994", "#29251c", "#e6aa9f"],
  ["#000000", "#7890a8", "#304878", "#181848", "#f0a818"],
  ["#fab96b", "#f19474", "#ea777b", "#94919a", "#69a2a8"],
  ["#2eb3a1", "#4fb37c", "#79b36b", "#a2ab5e", "#bca95b"],
  ["#72bab0", "#f0c69c", "#d1284f", "#9e0e30", "#301a1a"],
  ["#6d165a", "#a0346e", "#ec5c8d", "#ff8c91", "#ffc4a6"],
  ["#d0dcb3", "#dabd90", "#df7670", "#f4065e", "#837d72"],
  ["#f7f3cf", "#c2e4cb", "#36cecc", "#27b1bf", "#176585"],
  ["#61d4b0", "#8ee696", "#baf77c", "#e8ff65", "#ecedd5"],
  ["#322f3e", "#e63c6d", "#f5b494", "#ede7a5", "#abdecb"],
  ["#c0b698", "#647e37", "#300013", "#6e9a81", "#d2c8a7"],
  ["#594747", "#6743a5", "#7345d6", "#2e2e2e", "#bfab93"],
  ["#4e031e", "#5d2d4e", "#5a4c6e", "#447390", "#05a1ad"],
  ["#f9ebc4", "#ffb391", "#fc2f68", "#472f5f", "#08295e"],
  ["#d3c6cc", "#e2c3c6", "#eecfc4", "#f8e6c6", "#ffffcc"],
  ["#02031a", "#021b2b", "#b10c43", "#ff0841", "#ebdfcc"],
  ["#463a2a", "#5c4b37", "#dddd92", "#57c5c7", "#00b5b9"],
  ["#e72313", "#fffcf7", "#67b588", "#65a675", "#141325"],
  ["#648285", "#b4a68e", "#080d0d", "#f3daaa", "#a3c4c2"],
  ["#3a3132", "#0f4571", "#386dbd", "#009ddd", "#05d3f8"],
  ["#010300", "#314c53", "#5a7f78", "#bbdec6", "#f7f8fc"],
  ["#66ffff", "#8cbfe6", "#b380cc", "#d940b3", "#ff0099"],
  ["#63072c", "#910f43", "#a65d53", "#d59500", "#f7f7a1"],
  ["#a69a81", "#e0d3b8", "#eb9e6e", "#eb6e6e", "#706f6b"],
  ["#edd8bb", "#e2aa87", "#fef7e1", "#a2d3c7", "#ef8e7d"],
  ["#070743", "#169d99", "#b9cc01", "#fae894", "#ab0768"],
  ["#edb886", "#f1c691", "#ffe498", "#f9f9f1", "#b9a58d"],
  ["#87b091", "#c4d4ab", "#e0e0b6", "#171430", "#eff0d5"],
  ["#ff7c70", "#f2dfb1", "#b7c9a9", "#674d69", "#2e292e"],
  ["#1f0441", "#fc1068", "#fcab10", "#f9ce07", "#0ce3e8"],
  ["#2a091c", "#87758f", "#85aab0", "#a3c3b8", "#e3edd2"],
  ["#211c33", "#2b818c", "#ffc994", "#ed2860", "#990069"],
  ["#f75e50", "#eac761", "#e8df9c", "#91c09e", "#7d7769"],
  ["#fff7e5", "#fecdd0", "#f8afb8", "#f5a3af", "#59483e"],
  ["#11091a", "#2f2f4d", "#626970", "#bab195", "#e8d18e"],
  ["#68b2f8", "#506ee5", "#7037cd", "#651f71", "#1d0c20"],
  ["#c9031a", "#9d1722", "#4a2723", "#07a2a6", "#ffeccb"],
  ["#fa3419", "#f3e1b6", "#7cbc9a", "#23998e", "#1d5e69"],
  ["#000000", "#a69682", "#7e9991", "#737373", "#d8770c"],
  ["#cc063e", "#e83535", "#fd9407", "#e2d9c2", "#10898b"],
  ["#cbe4ea", "#ead1cb", "#af9c98", "#657275", "#000000"],
  ["#a9baae", "#e6d0b1", "#deb297", "#c98d7b", "#8a6662"],
  ["#fb573b", "#4f393c", "#8ea88d", "#9cd0ac", "#f4eb9e"],
  ["#9d9382", "#ffc1b2", "#ffdbc8", "#fff6c7", "#dcd7c2"],
  ["#a89d87", "#bab100", "#f91659", "#b31d6a", "#2e2444"],
  ["#decba0", "#a0ab94", "#6b9795", "#594461", "#6e1538"],
  ["#fef7d5", "#abee93", "#2d938e", "#0b4462", "#f7a48b"],
  ["#4b1623", "#75233d", "#c4594b", "#f0b96b", "#fdf57e"],
  ["#00686c", "#32c2b9", "#edecb3", "#fad928", "#ff9915"],
  ["#f3ffd2", "#bff1ce", "#82bda7", "#6e837c", "#2e0527"],
  ["#e0eebd", "#dae98a", "#e17572", "#ce1446", "#2b0b16"],
  ["#40223c", "#42988f", "#b1c592", "#f1ddba", "#fb718a"],
  ["#8fbfb9", "#649ea7", "#bddb88", "#e0f3b2", "#eefaa8"],
  ["#3b1a01", "#a5cc7a", "#dcffb6", "#633b1c", "#db3c6e"],
  ["#865a19", "#c4b282", "#85005b", "#520647", "#0e002f"],
  ["#0e0036", "#4c264b", "#a04f62", "#d2a391", "#e6d7b8"],
  ["#b9f8f0", "#b6d3a5", "#ee9b57", "#ef2b41", "#11130e"],
  ["#a4f7d4", "#9ae07d", "#ada241", "#a13866", "#381c30"],
  ["#320139", "#331b3b", "#333e50", "#5c6e6e", "#f1debd"],
  ["#e5fec5", "#c5fec6", "#a3fec7", "#29ffc9", "#392a35"],
  ["#e3604d", "#d1c8a3", "#acba9d", "#7b5d5e", "#c6ad71"],
  ["#300d28", "#70615c", "#8ca38b", "#f7eeaa", "#edb552"],
  ["#1f192f", "#2d6073", "#65b8a6", "#b5e8c3", "#f0f7da"],
  ["#ebe5ce", "#ced1c0", "#bad1c9", "#8c162a", "#660022"],
  ["#1a0c12", "#f70a71", "#ffdaa6", "#ffb145", "#74ab90"],
  ["#bbaa9a", "#849b95", "#90856f", "#b6554c", "#d83a31"],
  ["#e4e2af", "#ffa590", "#e5cbb4", "#fff1d7", "#56413e"],
  ["#7e6762", "#cf5a60", "#f85a69", "#f0b593", "#e3dfbc"],
  ["#484450", "#466067", "#459a96", "#34baab", "#c4c8c5"],
  ["#f2ecb0", "#ebb667", "#d65c56", "#823c3c", "#1b1c26"],
  ["#fbffcc", "#caf2be", "#ddc996", "#f67975", "#f13565"],
  ["#574d4f", "#ffffff", "#969091", "#ffe999", "#ffd952"],
  ["#caf729", "#79dd7e", "#2ecbaa", "#21b6b6", "#888dda"],
  ["#ffe3b3", "#ff9a52", "#ff5252", "#c91e5a", "#3d2922"],
  ["#99db49", "#069e8c", "#211d19", "#575048", "#9e064a"],
  ["#e2e2b2", "#49fecf", "#370128", "#e42355", "#fe7945"],
  ["#f3b578", "#f78376", "#da4c66", "#8f3c68", "#3f3557"],
  ["#eed47f", "#f2e0a0", "#d8d8b2", "#8cb0b0", "#432332"],
  ["#5c1b35", "#d43f5d", "#f2a772", "#e8d890", "#e2edb7"],
  ["#79d6b7", "#ccd6bd", "#d7c3ab", "#f0afab", "#f58696"],
  ["#cdb28a", "#f9f4e3", "#d4ddb1", "#b1ba8e", "#7a6448"],
  ["#f1f7cd", "#d3f7cd", "#b5f7cd", "#403a26", "#81876c"],
  ["#c7003f", "#f90050", "#f96a00", "#faab00", "#daf204"],
  ["#412973", "#753979", "#b1476d", "#eb9064", "#bed9c8"],
  ["#8f9044", "#f8a523", "#fc8020", "#cf1500", "#352f3d"],
  ["#48586f", "#ffffc0", "#d6c496", "#d62e2e", "#283d3e"],
  ["#7d677e", "#4f2c4d", "#360b41", "#ccc9aa", "#fafdea"],
  ["#f8f8d6", "#b3c67f", "#5d7e62", "#50595c", "#fa3e3e"],
  ["#f4fcb8", "#dae681", "#95a868", "#452c18", "#cc7254"],
  ["#5e5473", "#19b5a5", "#ede89d", "#ff6933", "#ff0048"],
  ["#723e4e", "#b03851", "#ef3353", "#f17144", "#f4b036"],
  ["#f3ddb6", "#d6bf93", "#532728", "#ced0ba", "#f2efce"],
  ["#663333", "#994d4d", "#cc6666", "#e6b280", "#ffff99"],
  ["#fea304", "#909320", "#125a44", "#37192c", "#220315"],
  ["#52baa7", "#718f85", "#ba5252", "#fc0f52", "#fc3d73"],
  ["#edab8b", "#f5ebb0", "#dad061", "#acc59d", "#776c5a"],
  ["#f8f4c4", "#d5e0b5", "#a5c3a7", "#6d8b89", "#47667b"],
  ["#c8cfae", "#96b397", "#525574", "#5c3e62", "#9b5f7b"],
  ["#e4b302", "#158fa2", "#de4f3a", "#722731", "#bd1b43"],
  ["#0b110d", "#2c4d56", "#c3aa72", "#dc7612", "#bd3200"],
  ["#52493a", "#7c8569", "#a4ab80", "#e8e0ae", "#de733e"],
  ["#665c52", "#74b3a7", "#a3ccaf", "#e6e1cf", "#cc5b14"],
  ["#53ac59", "#3b8952", "#0f684b", "#03484c", "#1c232e"],
  ["#111113", "#d18681", "#acbfb7", "#f6ebdd", "#8e6d86"],
  ["#745e50", "#ff948b", "#fdaf8a", "#fcd487", "#f79585"],
  ["#090f13", "#171f25", "#752e2b", "#c90a02", "#f2eab7"],
  ["#d3b390", "#b8a38b", "#a78b83", "#c76b79", "#f1416b"],
  ["#210210", "#ee2853", "#2b0215", "#8f2f45", "#d24d6c"],
  ["#ceebd1", "#b6deb9", "#b1ccb4", "#aebfaf", "#a6ada7"],
  ["#545454", "#7b8a84", "#8cbfaf", "#ede7d5", "#b7cc18"],
  ["#e6546b", "#da8f72", "#ffe792", "#c9daa4", "#8acbb5"],
  ["#ffffea", "#a795a5", "#7a959e", "#424e5e", "#3b2b46"],
  ["#addfd3", "#eae3d0", "#dbc4b6", "#ffa5aa", "#efd5c4"],
  ["#c5f7f0", "#a9c2c9", "#8e8ca3", "#72577c", "#562155"],
  ["#394736", "#696b46", "#b99555", "#a8462d", "#5c584c"],
  ["#5a372c", "#8b8b70", "#98c7b0", "#f0f0d8", "#c94b0c"],
  ["#ff548f", "#9061c2", "#be80ff", "#63d3ff", "#02779e"],
  ["#9ed99e", "#f0dda6", "#eb6427", "#eb214e", "#1a1623"],
  ["#000000", "#1693a5", "#d8d8c0", "#f0f0d8", "#ffffff"],
  ["#383939", "#149c68", "#38c958", "#aee637", "#fffedb"],
  ["#ffdeb3", "#73bc91", "#342220", "#fc370c", "#ff8716"],
  ["#cce4d1", "#d2e1a7", "#d8de7d", "#dedb53", "#e4d829"],
  ["#3b234a", "#523961", "#baafc4", "#c3bbc9", "#d4c7bf"],
  ["#4d4250", "#b66e6f", "#cf8884", "#e6a972", "#f6d169"],
  ["#f0c0a8", "#f0d8a8", "#a8c090", "#789090", "#787878"],
  ["#5f545c", "#eb7072", "#f5ba90", "#f5e2b8", "#a2caa5"],
  ["#cccc66", "#a6bf73", "#80b380", "#59a68c", "#339999"],
  ["#fdefb0", "#e7a8b1", "#b998b3", "#77779d", "#4771a3"],
  ["#473334", "#b3c8a7", "#ffebb9", "#e3536c", "#da1a29"],
  ["#dae5ab", "#e9a385", "#fa154b", "#87313f", "#604e48"],
  ["#e6e6e6", "#aae6d9", "#c8cbc1", "#e6b0aa", "#a1a1a1"],
  ["#3b3f49", "#fdfaeb", "#faeddf", "#f3c6b9", "#f7a29e"],
  ["#f23e02", "#fef5c8", "#00988d", "#2c6b74", "#013750"],
  ["#332d27", "#8a0015", "#e30224", "#85725f", "#fae1c0"],
  ["#bfe0c0", "#160921", "#f06e75", "#f2af60", "#d0d26f"],
  ["#eddbc4", "#a3c9a7", "#ffb353", "#ff6e4a", "#5c5259"],
  ["#fbb498", "#f8c681", "#bec47e", "#9bb78f", "#98908d"],
  ["#cb7ca2", "#ed9da1", "#c9e5af", "#dceeb1", "#fef9f6"],
  ["#c95c7a", "#de9153", "#d6d644", "#dcebaf", "#14888b"],
  ["#f2d786", "#ff9784", "#c09491", "#a4c09a", "#d4d9a1"],
  ["#f2eabc", "#54736e", "#194756", "#080000", "#ff3b58"],
  ["#ae0c3e", "#afcca8", "#f5eec3", "#c7b299", "#33211c"],
  ["#000000", "#8f1414", "#e50e0e", "#f3450f", "#fcac03"],
  ["#a88914", "#91a566", "#bed084", "#e9e199", "#faedca"],
  ["#37193b", "#e75a7a", "#f59275", "#f5c273", "#aeb395"],
  ["#bad3c6", "#f9d9ac", "#fca483", "#f18886", "#7b7066"],
  ["#e8d7a9", "#8eaa94", "#6b666d", "#6c3751", "#52223c"],
  ["#f0f0f0", "#d8d8d8", "#c0c0a8", "#604848", "#484848"],
  ["#f05c54", "#a17457", "#5c735e", "#3d615b", "#434247"],
  ["#ff1d44", "#fbebaf", "#74bf9d", "#56a292", "#1c8080"],
  ["#fcbf6b", "#a9ad94", "#42302e", "#f6daab", "#dabd7b"],
  ["#ff8482", "#ffb294", "#f8d8a5", "#91be95", "#635a49"],
  ["#484848", "#006465", "#0f928c", "#00c9d2", "#beee3b"],
  ["#680a1d", "#3f1719", "#fcef9c", "#e8b666", "#ba2339"],
  ["#413249", "#ccc591", "#e2b24c", "#eb783f", "#ff426a"],
  ["#880606", "#d53d0c", "#ff8207", "#231d1e", "#fcfcfc"],
  ["#c5b89f", "#feffd4", "#9e2d4a", "#450b1e", "#21000f"],
  ["#f7fd91", "#d09e1e", "#fa7a32", "#f42a55", "#261323"],
  ["#5b1d99", "#0074b4", "#00b34c", "#ffd41f", "#fc6e3d"],
  ["#079ea6", "#1e0c42", "#f0077b", "#f5be58", "#e3e0b3"],
  ["#fcbf6b", "#e58634", "#657a38", "#afab50", "#a9ccb9"],
  ["#cee1d8", "#f6eee0", "#fda664", "#f04842", "#83563f"],
  ["#e0da96", "#badda3", "#94e0b0", "#a6b5ae", "#b88bad"],
  ["#2b2823", "#8fa691", "#d4ceaa", "#f9fadc", "#cc3917"],
  ["#c0d88c", "#f7a472", "#f07877", "#fa2a3a", "#0a5c5a"],
  ["#343635", "#d90057", "#e88700", "#77b8a6", "#ffe2ba"],
  ["#3e3433", "#f07f83", "#b29a78", "#9eaf83", "#75a480"],
  ["#ffbd87", "#ffd791", "#f7e8a6", "#d9e8ae", "#bfe3c0"],
  ["#c3e6d4", "#f4f0e5", "#e0c4ae", "#e1918e", "#e15e6e"],
  ["#bd2a33", "#d6aa26", "#93a31c", "#408156", "#30374f"],
  ["#243757", "#3a5f6f", "#dad5b7", "#c2b79b", "#665e52"],
  ["#e1c78c", "#eda011", "#db6516", "#7a6949", "#adad8e"],
  ["#eb445b", "#f5938b", "#f0cdab", "#f1e7c5", "#b6d4bb"],
  ["#d0cf75", "#f8764e", "#da2644", "#90044a", "#440a2a"],
  ["#185b63", "#c0261c", "#ba460d", "#c59538", "#404040"],
  ["#40ffdc", "#00a9d4", "#1c3166", "#240047", "#1c0021"],
  ["#5e1f28", "#8a2f2e", "#ae5543", "#f7bb75", "#83764c"],
  ["#f1d989", "#3e3932", "#0fbab7", "#000c0c", "#e2e3a9"],
  ["#e46d29", "#ba4c57", "#4e3a3b", "#a59571", "#d0bc87"],
  ["#eb7f7f", "#eb9a7f", "#ebb57f", "#ebd07f", "#ebeb7f"],
  ["#e2d9db", "#f2e5f9", "#d9e1df", "#ff8a84", "#fe6763"],
  ["#f3d597", "#b6d89c", "#92ccb6", "#f87887", "#9e6b7c"],
  ["#e0d1ed", "#f0b9cf", "#e63c80", "#c70452", "#4b004c"],
  ["#e84d5b", "#eae2cf", "#b4ccb9", "#26979f", "#3b3b3b"],
  ["#13141a", "#a90448", "#fb3640", "#fda543", "#17c69b"],
  ["#5a5239", "#190a12", "#b3c9c1", "#cec7b6", "#eee9c7"],
  ["#0d0f36", "#294380", "#69d2cd", "#b9f1d6", "#f1f6ce"],
  ["#e4e6c9", "#e6dac6", "#d6c3b9", "#c2b48a", "#b37883"],
  ["#c9b8a8", "#f8af8c", "#a24d52", "#5a3044", "#391d34"],
  ["#58706d", "#4b5757", "#7c8a6e", "#b0b087", "#e3e3d1"],
  ["#faefc2", "#a4ac9d", "#a27879", "#a4626c", "#f05d77"],
  ["#e6ac84", "#ad9978", "#619177", "#161618", "#594c2a"],
  ["#855f30", "#9ec89a", "#eaba68", "#ff5248", "#f6ffb3"],
  ["#5c4152", "#b4585d", "#d97f76", "#f7d0a9", "#a1c0ae"],
  ["#bf9f88", "#e8c8a1", "#fce4be", "#f6a68d", "#f96153"],
  ["#a8ab9b", "#172a38", "#ec4b5d", "#f48773", "#e0c590"],
];
let zu = Math.floor(Math.random() * ws.length);
console.log("Developers:\n --Sarthak Sharma\t\tsharmasarthak05@gmail.com\n --Shruti Singh\t\tshruti@shruti.com");
// console.log("sharmasarthak05@gmail.com");
let La = ws[zu];
La = La.map((r) => new Ie(r));
window.addEventListener("resize", () => {
  (Qt.aspect = window.innerWidth / window.innerHeight),
    Qt.updateProjectionMatrix(),
    Jn.setSize(window.innerWidth, window.innerHeight),
    Jn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const Ts = new Iu(),
  zi = new Du(),
  Qt = new ht(45, window.innerWidth / window.innerHeight, 1e-5, 1e3);
zi.add(Qt);
const va = 0.35;
Qt.position.set(0.01 * va, -0.3 * va, 1 * va);
Qt.position.set(0.0035, -0.105, 0.24);
Qt.rotation.z = 0.07;
const Ou = document.querySelector(".webgl"),
  Jn = new Ss({
    canvas: Ou,
    antialias: !0,
    alfa: !0,
    powerPreference: "high-performance",
  });
Jn.setSize(window.innerWidth, window.innerHeight);
Jn.render(zi, Qt);
const Bu = new Ni(1, 0.5, 120, 120),
  Es = new Jt({
    vertexShader: Nu,
    fragmentShader: Uu,
    side: Ot,
    uniforms: {
      uTime: { type: "f", value: Ts.getElapsedTime() },
      uColor: { value: La },
    },
  }),
  Gu = new Bt(Bu, Es);
zi.add(Gu);
function Vu(r, e) {
  Es.uniforms.uTime.value = r * 0.01;
}
const ku = new Fu(5);
ku.setColors(16711680, 65280, 255);
function As() {
  const r = Ts.getElapsedTime();
  Vu(r), Jn.render(zi, Qt), requestAnimationFrame(As);
}
As();
