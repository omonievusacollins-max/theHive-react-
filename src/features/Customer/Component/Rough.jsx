import { useEffect, useState } from "react";
import { getExtras, hasSpice, SPICE_LEVELS } from "../../../Utils/categoryExtras";
import "./CustomizeModal.css";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function CustomizeModal({ line, onSave, onClose }) {
  const extrasList = getExtras(line.category);
  const showSpice = hasSpice(line.category);

  const [extras, setExtras] = useState(line.extras || []);
  const [spice, setSpice] = useState(line.spice || null);
  const [note, setNote] = useState(line.note || "");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const toggleExtra = (name) =>
    setExtras((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );

  return (
    <div className="cm__overlay" onClick={onClose}>
      <div
        className="cm__sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cm__handle" aria-hidden="true" />

        <header className="cm__header">
          {line.image ? (
            <img className="cm__img" src={line.image} alt="" />
          ) : (
            <div className="cm__img cm__img--empty" aria-hidden="true" />
          )}
          <div className="cm__title-wrap">
            <h2 id="cm-title" className="cm__title">{line.name}</h2>
            <p className="cm__sub">
              {line.qty > 1 ? `Applies to all ${line.qty} in your cart` : "1 in your cart"}
            </p>
          </div>
          <button type="button" className="cm__close" aria-label="Close" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="cm__body">
          {showSpice && (
            <section className="cm__section">
              <h3 className="cm__label">Spice level</h3>
              <div className="cm__segments" role="radiogroup" aria-label="Spice level">
                {SPICE_LEVELS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={spice === s.id}
                    className={`cm__segment ${spice === s.id ? "is-on" : ""}`}
                    onClick={() => setSpice(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </section>
          )}

          {extrasList.length > 0 && (
            <section className="cm__section">
              <h3 className="cm__label">Add extra</h3>
              <div className="cm__extras">
                {extrasList.map((name) => {
                  const on = extras.includes(name);
                  return (
                    <button
                      key={name}
                      type="button"
                      role="checkbox"
                      aria-checked={on}
                      className={`cm__extra ${on ? "is-on" : ""}`}
                      onClick={() => toggleExtra(name)}
                    >
                      <span>{cap(name)}</span>
                      <span className="cm__check" aria-hidden="true">{on ? "✓" : ""}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          <section className="cm__section">
            <label className="cm__label" htmlFor="cm-note">Note for the kitchen</label>
            <textarea
              id="cm-note"
              className="cm__note"
              rows={3}
              maxLength={120}
              placeholder="e.g. Wrap the extra turkey separately"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <span className="cm__count">{note.length}/120</span>
          </section>
        </div>

        <footer className="cm__footer">
          <button
            type="button"
            className="cm__save"
            onClick={() => onSave({ extras, spice, note })}
          >
            Save changes
          </button>
        </footer>
      </div>
    </div>
  );
}