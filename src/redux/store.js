import { configureStore } from "@reduxjs/toolkit";
import caseSlice from "./caseTracker/caseSlice";

export default configureStore({
  reducer: { case: caseSlice },
});
