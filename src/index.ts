import app from "./app.js";
import processVar from "./defaults/defaultVariables.js";

const PORT = processVar.PORT || 8000;
app.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
