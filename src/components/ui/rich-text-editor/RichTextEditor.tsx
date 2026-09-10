import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./RichTextEditor.module.css";

export const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <ToolbarButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          label="B"
        />
        <ToolbarButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          label="I"
        />
        <ToolbarButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          label="• LISTA"
        />
        <ToolbarButton
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          label="1. LISTA"
        />
      </div>
      <EditorContent editor={editor} className={styles.content} />
    </div>
  );
};

const ToolbarButton = ({ active, onClick, label }: ToolbarButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active ? `${styles.toolBtn} ${styles.toolBtnActive}` : styles.toolBtn
      }
    >
      {label}
    </button>
  );
};

type RichTextEditorProps = {
  content: string;
  onChange: (html: string) => void;
};

type ToolbarButtonProps = {
  active: boolean;
  onClick: () => void;
  label: string;
};
