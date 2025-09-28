import FormHeader from "../atoms/Form/FormHeader";
import FormRadioButtons from "../atoms/Form/FormRadioButtons";
import FormTextArea from "../atoms/Form/FormTextArea";
import FormTextInput from "../atoms/Form/FormTextInput";
import { FormContentDto } from "./FormContentDto";

type FormContentProps = {
  onChangeName: any;
  onChangeIsComing: any;
  onChangeSong: any;
  onChangeTransport: any;
  onChangeAllergies: any;
  onChangeIsDeleted: any;
  id: number;
  isComing: string;
  forms: FormContentDto[];
};

const FormContent = ({
  forms,
  id,
  isComing,
  onChangeName,
  onChangeIsDeleted,
  onChangeIsComing,
  onChangeSong,
  onChangeAllergies,
  onChangeTransport,
}: FormContentProps) => {
  const onChange = () => {
    onChangeIsDeleted(id, true);
  };

  function nDeleted() {
    let count: number = 0;
    forms.forEach((form) => {
      if (!form.isDeleted) count++;
    });
    return count;
  }

  return (
    <div className="form-person">
      <button
        className={nDeleted() < 2 ? "button-disabled" : "button-remove"}
        disabled={nDeleted() < 2}
        type="button"
        onClick={onChange}
      >
        X
      </button>
      <div className="form-section">
        <FormHeader text="Namn" />
        <FormTextInput name="name" onChangeValue={onChangeName} id={id} />
      </div>
      <div className="form-section">
        <div className="form-radiobuttons-section">
          <FormHeader text="Kommer du?" />
          <div className="radiobuttons-box">
            <FormRadioButtons
              id={id}
              label="Ja, såklart!"
              value="yes"
              onChangeValue={onChangeIsComing}
              name={"iscoming" + id}
            />
          </div>
          <div className="radiobuttons-box">
            <FormRadioButtons
              id={id}
              label="Nej, tyvärr!"
              value="no"
              onChangeValue={onChangeIsComing}
              name={"iscoming" + id}
            />
          </div>
        </div>
      </div>
      {isComing === "yes" && (
        <>
          <div className="form-section">
            <FormHeader text="Ange eventuella allergier och specialkost, skriv nej om du inte har några" />
            <FormTextArea
              id={id}
              name={"allergies" + id}
              onChangeValue={onChangeAllergies}
            />
          </div>

          <div className="form-section">
            <FormHeader text="En låt jag absolut inte kan sitta still till…" />
            <FormTextArea
              id={id}
              name={"song" + id}
              onChangeValue={onChangeSong}
            />
          </div>

          <div className="form-section">
            <FormHeader text="Jag kommer ta bil och vill ta med mig fler bröllopsgäster eller skulle vilja samåka med någon som har bil." />
            <FormTextArea
              id={id}
              name={"transport" + id}
              onChangeValue={onChangeTransport}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FormContent;
