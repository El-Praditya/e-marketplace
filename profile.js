const namaInput = document.getElementById('namaLengkap');
const alamatInput = document.getElementById('alamat');
const displayName = document.getElementById('displayName');
const displayAddress = document.getElementById('displayAddress');
const greeting = document.getElementById('greeting');
const topAvatar = document.getElementById('topAvatar');
const editNameIcon = document.getElementById('editNameIcon');

namaInput.addEventListener('input', () => {
  const val = namaInput.value.trim();
  displayName.textContent = val || 'Username938';
  greeting.textContent = 'Hail ' + (val || 'Username938');
  topAvatar.textContent = (val ? val[0] : 'U').toUpperCase();
});

alamatInput.addEventListener('input', () => {
  displayAddress.textContent = alamatInput.value.trim() || 'Jl. Dr. C. Notoatmodjo, RT 02 RW 04, No 24';
});

editNameIcon.addEventListener('click', () => {
  namaInput.focus();
});

document.getElementById('securityForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('kataSandiBaru').value;
  const confirmPass = document.getElementById('konfirmasiSandi').value;

  if (!pass || !confirmPass) {
    alert('Silakan isi kedua kolom kata sandi.');
    return;
  }
  if (pass !== confirmPass) {
    alert('Kata sandi tidak sama. Silakan periksa kembali.');
    return;
  }
  alert('Kata sandi berhasil diperbarui.');
  e.target.reset();
});

// 5. Konfirmasi Hapus Akun
document.getElementById('deleteBtn').addEventListener('click', () => {
  const sure = confirm('Yakin ingin menghapus akun secara permanen? Tindakan ini tidak dapat dibatalkan.');
  if (sure) {
    alert('Akun telah dihapus (simulasi).');
  }
});

// 6. Konfirmasi Log out
document.getElementById('logoutBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const sure = confirm('Yakin ingin keluar?');
  if (sure) {
    alert('Berhasil logout (simulasi).');
  }
});