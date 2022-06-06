// import "./assets/styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BandSection from "./components/BandSection/BandSection";
// import Navbar from "./components/Navbar/Navbar";
// import ClassComponent from "./components/ClassComponent/ClassComponent";
// import ContentCard from "./components/ContentCard/ContentCard";
// import BandContainerSection from "./components/BandContainerSection/BandContainerSection";
// import ToDoList from "./components/ToDoList/ToDoList";

// const list = [
//   {
//     title: "6-6-2022",
//     action: "Main Bola",
//     isDone: true,
//   },
//   {
//     title: "7-6-2022",
//     action: "Main Basket",
//     isDone: false,
//   },
// ];

// function App() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="container">
//         <div className="row">
//           <div className="col-6 offset-3  ">
//             {/* <ContentCard username="mobil_keren" /> */}
//             {list.map((val) => {
//               return (
//                 <ToDoList
//                   title={val.title}
//                   action={val.action}
//                   isDone={val.isDone}
//                 ></ToDoList>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {/* <BandBannerSection /> */}
//       {/* <BandSection /> */}
//     </>
//   );
// }

// export default App;

// import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

// function ToDoList(props) {
//     return (
// <Card>
//     <CardBody>
//         <CardTitle> { props.title}</CardTitle>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <CardText> {props.action} </CardText>
//         {
//             props.isDone == false?
//             <Button color="danger"> On Going </Button>
//             :
//             <Button color="success"> Done </Button>

//         }
//         </div>

//         {/* <Button color="danger"> On Going </Button> */}
//     </CardBody>
// </Card>

//     )
// }

// export default ToDoList
