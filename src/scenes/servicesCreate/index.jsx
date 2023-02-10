import { useTheme } from "@emotion/react";
import { AddToPhotosOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
// import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const [input, setInputs] = useState({});
  const [urls, seturls] = useState([]);
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [files, setFiles] = useState([]);

  // console.log("Inputs:", input);
  // console.log("Cat:", cat);
  // console.log("Colors:", color);
  // console.log("Images:", files);
  // console.log("Urls:", urls);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      setFiles((prev) => [...prev, newFile]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const promises = [];
    files.map((file) => {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, `images/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((urls) => {
            seturls((prev) => [...prev, urls]);
          });
        }
      );
    });

    Promise.all(promises)
      .then(() => toast("File uploaded"))
      .catch((err) => console.log(err));
  };

  

}

export default ProductForm;
