export type GalleryImage = {
  id: string;
  caption: string;
  category: string;
  image: string;
  orientation: "landscape" | "portrait" | "squarish";
};

export const galleryCategories = [
  "All",
  "Campus",
  "Academics",
  "School Life",
  "Sports",
  "Events",
];

export const galleryImages: GalleryImage[] = [
  {
    id: "gal-01",
    caption: "The historic Mangu High School gate",
    category: "Campus",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1507883433mangu_gate.jpg",
  },
  {
    id: "gal-02",
    caption: "A century of school history on campus",
    category: "Campus",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637055956.webp",
  },
  {
    id: "gal-03",
    caption: "Where the future begins",
    category: "Campus",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637059421.webp",
  },
  {
    id: "gal-04",
    caption: "Learning at Mangu",
    category: "Academics",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637058465.webp",
  },
  {
    id: "gal-05",
    caption: "Technology in the 21st century",
    category: "Academics",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637057788.webp",
  },
  {
    id: "gal-06",
    caption: "Boarding facilities and house life",
    category: "School Life",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/mangu-high-school-1637054156.webp",
  },
  {
    id: "gal-07",
    caption: "Mangu High School golf tournament",
    category: "Sports",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533907782086A3313%5B1%5D.jpg",
  },
  {
    id: "gal-08",
    caption: "Action from the Mangu golf tournament",
    category: "Sports",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533908748086A3371%5B1%5D.jpg",
  },
  {
    id: "gal-09",
    caption: "Mangu golf tournament on the course",
    category: "Sports",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533907631086A3383%5B1%5D.jpg",
  },
  {
    id: "gal-10",
    caption: "Mangu alumni golf tournament",
    category: "Events",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886605JPG_7144%281%29.JPG",
  },
  {
    id: "gal-11",
    caption: "Alumni on the course at the annual tournament",
    category: "Events",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533886337JPG_7095%281%29.JPG",
  },
  {
    id: "gal-12",
    caption: "Mangu alumni reunion on the fairway",
    category: "Events",
    orientation: "landscape",
    image:
      "https://elimu-gen4.ams3.digitaloceanspaces.com/gen4/articles/uploads/1533885900086A3293%5B1%5D.jpg",
  },
];