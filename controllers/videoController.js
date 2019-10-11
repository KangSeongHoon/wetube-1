import {
    videos
} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", {
        pageTitle: "Home",
        videos
    });
};

export const search = (req, res) => {
    const {
        query: {
            term: searchingBy
        }
    } = req;

    res.render("search", {
        pageTitle: "Search",
        searchingBy,
        videos
    });
};

export const getUpload = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});

export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    //To Do: Upload and save video 
    res.redirect(routes.videoDetail(11111));
};

export const videoDetails = (req, res) => res.render("videoDetail", {
    pageTitle: "Video Details"
});
export const editVideo = (req, res) => res.render("editVideo", {
    pageTitle: "Edit Video"
});
export const deleteVideo = (req, res) => res.render("deleteVideo", {
    pageTitle: "Delete Video"
});