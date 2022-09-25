function get(p) {
  if (p != null) {
    if (p.Name != null) {
      console.log(p.Name);
    }
  }
}

/* === */
function get(p) {
  if (p != null) {
    if (p.Name != null) {
      console.log(p.Name);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

/* === */

function get(p) {
  if (p != null) {
    if (p.Name != null) {
      console.log(p.Name);
    } else {
      return;
    }
  } else {
    return;
  }
}

/* === */

function get(p) {
  if (p == null || p.Name == null) return;
  console.log(p.Name);
}

/* === */

function get(p) {
  if (p?.Name) console.log(p.Name);
}
