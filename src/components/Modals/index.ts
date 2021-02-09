import { App } from "vue";

// Modals
import CreateProjectModal from "@/components/Modals/CreateProjectModal/CreateProjectModal.vue";
import ImportProjectModal from "@/components/Modals/ImportProjectModal/ImportProjectModal.vue";

// Register all modals globally
export default {
	install(app: App): void {
		app.component("CreateProjectModal", CreateProjectModal);
		app.component("ImportProjectModal", ImportProjectModal);
	}
};