import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "@/context/AppContext";
import type { Entry, EntryType } from "@/types/entry";
import { stripHtml } from "@/utils/html";
import { Window2 } from "@/components/ui/window/Window2";
import { Input } from "@/components/ui/input/Input";
import { RichTextEditor } from "@/components/ui/rich-text-editor/RichTextEditor";
import { TypeSelector } from "@/components/ui/type-selector/TypeSelector";
import { TagInput } from "@/components/ui/tag-input/TagInput";
import { Button } from "@/components/ui/button/Button";
import styles from "./EntryForm.module.css";

function EntryForm() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [types, setTypes] = useState<EntryType[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!title.trim()) {
      nextErrors.title = "Dê um título para a entrada.";
    }

    if (!stripHtml(content).trim()) {
      nextErrors.content = "Escreva algo antes de salvar.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const now = new Date().toISOString();
    const entry: Entry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content,
      types,
      tags,
      createdAt: now,
      updatedAt: now,
    };

    dispatch({ type: "ADD_ENTRY", payload: entry });
    navigate("/catalog");
  };

  return (
    <div className={styles.page}>
      <Window2 title="NOVA ENTRADA">
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <Input
            id="title"
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={errors.title}
          />

          <div className={styles.field}>
            <label className={styles.label}>Conteúdo</label>
            <RichTextEditor content={content} onChange={setContent} />
            {errors.content && (
              <span className={styles.errorText}>{errors.content}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Tipos</label>
            <TypeSelector selected={types} onChange={setTypes} />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Tags</label>
            <TagInput tags={tags} onChange={setTags} />
          </div>

          <div className={styles.actions}>
            <Button type="button" variant="ghost" onClick={() => navigate(-1)}>
              CANCELAR
            </Button>
            <Button type="submit" variant="primary">
              SALVAR
            </Button>
          </div>
        </form>
      </Window2>
    </div>
  );
}

export default EntryForm;

type FormErrors = {
  title?: string;
  content?: string;
};
