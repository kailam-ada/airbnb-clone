import axios from "axios";

export async function addPhotoByLink(photoLink, onChange) {
  const { data: filename } = await axios.post("/upload-by-link", {
    link: photoLink,
  });
  onChange((prev) => [...prev, filename]);
}

export function uploadPhoto(ev, onChange) {
  const files = ev.target.files;
  const data = new FormData();

  for (let i = 0; i < files.length; i++) {
    data.append("photos", files[i]);
  }

  axios
    .post("/upload", data, {
      headers: { "Content-type": "multipart/form-data" },
    })
    .then((response) => {
      const { data: filenames } = response;
      onChange((prev) => [...prev, ...filenames]);
    });
}

export function removePhoto(ev, filename, onChange, addedPhotos) {
  ev.preventDefault();
  onChange([...addedPhotos.filter((photo) => photo !== filename)]);
}

export function selectAsMainPhoto(ev, filename, onChange, addedPhotos) {
  ev.preventDefault();
  onChange([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
}
