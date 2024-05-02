const HomeController = {};

HomeController.getWelcome = (req, res) => {
    try {
        res.status(201).json({
            msg: "Welcome to QuizApp!",
            title: "QuizApp",
            author: "Irsal Fathi Farhat",
            author_website: "https://bobogeng.com",
            version: 1.0,
            repo: "https://github.com/Fullstack-Javascript-Sanber-Foundation/Backend_Project_Irsal_Fathi_Farhat",
        });
    } catch (error) {
        console.log(error);
    }
};

HomeController.getAuthor = (req, res) => {
    res.status(201).json({
        name: "Irsal Fathi Farhat",
        address: "Depok, Indonesia",
        education:
            "Bachelor's Degree in Informatics Engineering from Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
        instagram: ["@irsal_f.f", "@bobogeng.ui"],
        github: "https://github.com/Bobogeng",
        linkedin: "https://www.linkedin.com/in/irsal-fathi-farhat",
        youtube: [
            "https://www.youtube.com/channel/UCw2wRI6MUlyW1T32g8RZ-fg",
            "https://www.youtube.com/channel/UCrNZjGkFRIyq1SWoGHh0g3w",
        ],
        dribbble: "https://dribbble.com/Bobogeng",
        behance: "https://www.behance.net/bobogeng",
    });
};

export default HomeController;
