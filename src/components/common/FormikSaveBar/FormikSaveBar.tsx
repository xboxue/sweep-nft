import { useFormikContext } from "formik";
import { useState } from "react";
import FormDiscardDialog from "../FormDiscardDialog/FormDiscardDialog";
import NavigationBlocker from "../NavigationBlocker/NavigationBlocker";
import SaveBar from "../SaveBar/SaveBar";

interface Props {
  loading?: boolean;
}

const FormikSaveBar = ({ loading = false }: Props) => {
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);
  const formik = useFormikContext();

  return (
    <>
      <NavigationBlocker
        message="If you leave this page, any unsaved changes will be lost."
        when={formik.dirty}
      />
      <FormDiscardDialog
        open={discardDialogOpen}
        onClose={() => setDiscardDialogOpen(false)}
        onDiscard={() => {
          formik.resetForm();
          setDiscardDialogOpen(false);
        }}
      />
      {formik.dirty && (
        <SaveBar
          onDiscard={() => setDiscardDialogOpen(true)}
          loading={loading}
        />
      )}
    </>
  );
};

export default FormikSaveBar;
