import { useState } from "react";
import FormContent from "./FormContent";
import { FormContentDto } from "./FormContentDto";
import React from "react";
import useIsMobile from "../../hooks/useIsMobile";

const NoticeForm = () => {
  interface acceptance {
    name: string;
    isComing: string;
    sent: string;
    allergies: string;
    song: string;
    transport: string;
    others: string;
  }

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date();
    const APP_ID =
      "AKfycbx5auii34v2lN8FNR6jKHvBpb4d7rvXJedc9T9pOCTiTnoI9btDUzHE_zte6t2iD-aC";
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;

    let formDataList: Array<FormData> = [];
    let allFieldsCorrect = true;

    forms.forEach((form) => {
      const formData = new FormData();

      if (form.isDeleted) {
        return;
      }

      if (form.name === "" || form.isComing === "") {
        setMissedFields("Hoppsan, du verkar ha missat ett fält :)");
        allFieldsCorrect = false;
        return;
      }
      if (form.isComing === "no") {
        const inputValue: acceptance = {
          name: form.name,
          isComing: "nej",
          allergies: "-",
          song: "-",
          transport: "-",
          others: "-",
          sent: date.toLocaleString(),
        };
        Object.keys(inputValue).forEach((key) => {
          formData.append(key, inputValue[key as keyof acceptance]);
        });

        formDataList.push(formData);
      }

      if (form.isComing === "yes") {
        if (
          form.allergies === "" ||
          form.song === "" ||
          form.transport === "" ||
          form.others === ""
        ) {
          setMissedFields("Hoppsan, du verkar ha missat ett fält :)");
          allFieldsCorrect = false;
          return;
        }
        const inputValue: acceptance = {
          name: form.name,
          isComing: form.isComing,
          allergies: form.allergies ?? "",
          song: form.song ?? "",
          transport: form.transport ?? "",
          others: form.others ?? "",
          sent: date.toLocaleString(),
        };

        Object.keys(inputValue).forEach((key) => {
          formData.append(key, inputValue[key as keyof acceptance]);
        });

        formDataList.push(formData);
      }
    });

    if (allFieldsCorrect) {
      formDataList.forEach(async (formData) => {
        try {
          const res = await fetch(baseURL, {
            method: "POST",
            body: formData,
          });
          if (res.ok) {
            console.log("Request was successful:", res);
          } else {
            console.log("Request Failed:", res);
            setMissedFields("Nått gick fel :( Testa igen! :)");

            return;
          }
        } catch (e) {
          setMissedFields("Nått gick fel :( Testa igen! :)");
          return;
        }
      });
      setReplyDone(true);
    }
  };

  const [missedFields, setMissedFields] = useState<string>("");
  const [counter, setCounter] = useState<number>(1);
  const [replyDone, setReplyDone] = useState<boolean>(false);

  const [forms, setForms] = useState<FormContentDto[]>([
    {
      isDeleted: false,
      id: 0,
      name: "",
      isComing: "",
      allergies: "",
      song: "",
      transport: "",
      others: "",
    },
  ]);

  const todo = () => {
    setCounter((counter) => counter + 1);
    setForms(
      forms.concat({
        isDeleted: false,
        id: counter,
        name: "",
        isComing: "",
        allergies: "",
        song: "",
        transport: "",
        others: "",
      })
    );
  };

  //https://stackoverflow.com/questions/57912426/use-dynamically-created-react-components-and-fill-with-state-values
  const onChangeName = (id: any, name: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, name };
        }
        return item;
      });
    });
  };

  const onChangeIsDeleted = (id: any, isDeleted: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, isDeleted };
        }
        return item;
      });
    });
  };

  const onChangeIsComing = (id: any, isComing: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, isComing };
        }
        return item;
      });
    });
  };

  const onChangeAllergies = (id: any, allergies: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, allergies };
        }
        return item;
      });
    });
  };

  const onChangeSong = (id: any, song: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, song };
        }
        return item;
      });
    });
  };

  const onChangeTransport = (id: any, transport: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, transport };
        }
        return item;
      });
    });
  };

  const onChangeOthers = (id: any, others: any) => {
    setForms((form) => {
      return form.map((item) => {
        if (item.id === id) {
          return { ...item, others };
        }
        return item;
      });
    });
  };

  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div>
          <p style={{ fontWeight: "bolder" }}>
            OSA-Formulär kan endast nås via dator
          </p>
        </div>
      ) : (
        <>
          {!replyDone ? (
            <form className="notice-form" onSubmit={handlePost}>
              {forms
                .filter((form) => !form.isDeleted)
                .map((form) => {
                  return (
                    <FormContent
                      forms={forms}
                      key={form.id}
                      id={form.id}
                      isComing={form.isComing}
                      onChangeName={onChangeName}
                      onChangeIsDeleted={onChangeIsDeleted}
                      onChangeIsComing={onChangeIsComing}
                      onChangeAllergies={onChangeAllergies}
                      onChangeSong={onChangeSong}
                      onChangeTransport={onChangeTransport}
                      onChangeOthers={onChangeOthers}
                    />
                  );
                })}

              <button
                type="button"
                onClick={todo}
                className="form-button add-person"
              >
                +Lägg till person
              </button>
              <button type="submit" className="form-button submit">
                Svara
              </button>
              {missedFields != "" && (
                <div>
                  <p>{missedFields}</p>
                </div>
              )}
            </form>
          ) : (
            <p>Tack för svar!</p>
          )}
        </>
      )}
    </>
  );
};

export default NoticeForm;
