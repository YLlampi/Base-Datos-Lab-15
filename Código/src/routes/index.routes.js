import { Router } from 'express';
import { render } from 'express/lib/response';

const router = Router()

router.get("/", (req, res) => {
    res.render('index');
});

router.get("/about", (req, res) => {
    res.send("about");
});

export default router;