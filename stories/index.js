initPlayer({
  target: ".my-player",
  slides: [
    {
      url: "img/chunk1.jpg",
      filter: ["contrast(1500%)", "blur(5px)"],
      alt: "slide1",
      overlays: [
        {
          type: "text",
          value: "Глампинг - это очень здорово!",
          classes: ["watercolor"],
          styles: {
            color: "orange",
            top: "30%",
            left: "20%",
            "font-size": "25px",
          },
        },
      ],
    },
    {
      url: "img/chunk2.jpg",
      filter: ["blur(15px)"],
      alt: "slide2",
      overlays: [
        {
          type: "text",
          value: "Миру-мил, Баю-Бай!",
          classes: ["watercolor"],
          styles: {
            color: "orange",
            top: "50%",
            left: "10%",
            "font-size": "25px",
          },
        },
      ],
    },
    {
      url: "img/chunk3.jpg",
      alt: "slide3",
      overlays: [
        {
          type: "text",
          value: "Пeйте сок морковный...",
          classes: ["watercolor"],
          styles: {
            color: "orange",
            top: "50%",
            left: "10%",
            "font-size": "20px",
          },
        },
      ],
    },
    {
      url: "img/chunk4.jpg",
      alt: "slide4",
      overlays: [
        {
          type: "text",
          value: "Райт ту лефт, а не иначе..",
          classes: ["watercolor"],
          styles: {
            color: "orange",
            top: "40%",
            left: "10%",
            "font-size": "30px",
          },
        },
      ],
    },
    {
      url: "img/chunk5.jpg",
      alt: "slide5",
      overlays: [
        {
          type: "text",
          value: "Валет - всему голова, и покрывает даму...",
          transform: "rotate(-30deg)",
          animation: "scale 2s infinite ease-in-out",
          classes: ["watercolor"],
          styles: {
            color: "orange",
            top: "50%",
            left: "30%",
            "font-size": "25px",
          },
        },
        {
          type: "question",
          question: "Хотите стать Валетом?",
          variants: ['Да','Нет'],
          styles: {
            color: "orange",
            top: "65%",
            left: "30%"
          },
        },
      ],
    },
  ],
  delayPerSlide: 5,
});

const params1 = {
  target: ".my-player",
  slides: [
    {
      url: "img/chunk1.jpg",
      alt: "slide1",
      overlays: [
        {
          //<div class="player-chunk-overlay" style="color:orange;top:60%;left:30%;transform:rotate(-30deg);font-size:60px;text-shadow:1px" 1px="" #000=""> Привет</div>
          type: "text",
          value: "Привет",
          styles:
            // color:orange;font-size:60px;text-shadow:1px"
            {
              color: "orange",
              top: "60%",
              left: "30%",
              transform: "rotate(-30deg)",
              "font-size": "60px", // кавычки потому, что дефис разбивает с свойство font-size
              "text-shadow": "1px 1px #000", // кавычки потому, что дефис разбивает с свойство font-size
              animation: "scale 2s infinite ease-in-out",
            },
        },
        {
          type: "text",
          value: "Мир",
          styles: {
            color: "red",
            bottom: "10%",
            right: "20%",
            transform: "rotate(90deg)",
            "font-size": "30px", // кавычки потому, что дефис разбивает с свойство font-size
            "text-shadow": "1px 1px #000", // кавычки потому, что дефис разбивает с свойство font-size
            animation: "scale 5s infinite ease-in-out",
          },
        },
      ],
    },
    { url: "img/chunk2.jpg", alt: "slide2" },
    { url: "img/chunk3.jpg", alt: "slide3" },
    { url: "img/chunk4.jpg", alt: "slide4" },
    { url: "img/chunk5.jpg", alt: "slide5" },
  ],
  delayPerSlide: 5,
};
