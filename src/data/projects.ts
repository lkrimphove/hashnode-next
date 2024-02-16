import Project from "@/types/project";

const Projects: Project[] = [
  {
    name: "Outdoor Activities",
    description: "I built this website to visualize all my outdoor activities like hiking, running and skiing. It uses Pandas and Folium to map GPX files and display them on an interactive map.",
    url: "https://outdoor-activities.krimphove.site",
    github: "https://github.com/lkrimphove/OutdoorActivities",
    blog: "https://krimphove.site/blog/visualizing-outdoor-activities-with-python-folium",
    image: {
      src: "/projects/outdoor-activities.jpg",
      width: 1920,
      height: 1080,
    },
  },
  {
    name: "Spotify Wrapped Hack",
    description: "I composed a Jupyter Notebook that allows you to create your own personalized stats using your Spotify streaming data. This way you won’t need to wait for Spotify Wrapped.",
    github: "https://github.com/lkrimphove/JupyterNotebooks/tree/main/SpotifyAnalysis",
    blog: "https://krimphove.site/blog/spotify-wrapped-hack-create-your-own-stats-before-the-official-release",
    image: {
      src: "/projects/spotify-wrapped-hack.jpg",
      width: 438,
      height: 246,
    },
  },
];

export default Projects;