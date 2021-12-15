import React, { Component } from "react";

const getAstro = () => {
  return fetch(
    "https://www.7timer.info/bin/astro.php?lon=40.7663747&lat=43.8435973&ac=0&output=json&tzshift=4",
    {
      method: "GET",
    }
  ).then((response) => response.json());
};

export default class Astro extends Component {
  state = {
    info: null,
  };
  componentDidMount() {
    getAstro().then((res) => this.setState({ info: res }));
  }

  render() {
    return <div></div>;
  }
}
// const fileSystem = {
//   path: "",
//   name: "photos",
//   type: "directory",
//   children: [
//     {
//       path: "summer",
//       name: "summer",
//       type: "directory",
//       children: [
//         {
//           path: "summer/june",
//           name: "june",
//           type: "directory",
//           children: [
//             {
//               path: "summer/june/windsurf.jpg",
//               name: "windsurf.jpg",
//               type: "file",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: "winter",
//       name: "winter",
//       type: "directory",
//       children: [
//         {
//           path: "winter/january",
//           name: "january",
//           type: "directory",
//           children: [
//             {
//               path: "winter/january/ski.png",
//               name: "ski.png",
//               type: "file",
//             },
//             {
//               path: "winter/january/snowboard.jpg",
//               name: "snowboard.jpg",
//               type: "file",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
