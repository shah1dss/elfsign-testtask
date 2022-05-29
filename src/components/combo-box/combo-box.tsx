import './combo-box.css';
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react';

export interface ComboBoxProps {
  selected: string | null;
  setSelected: (str: string) => void;
  placeholder?: string | null;
  options?: Array<string>;
}

const useClickOutSide = (
  area: MutableRefObject<HTMLElement>,
  func: () => void
) => {
  useEffect(() => {
    const listener = (event) => {
      if (!area.current || !area.current.contains(event.target)) {
        func();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [func, area.current]);
};

const ComboBox: FC<ComboBoxProps> = ({
  selected,
  setSelected,
  placeholder = 'Select value',
  options = ['Javascript', 'Angular', 'React'],
  ...props
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCloseBtn, setCloseBtn] = useState<boolean>(false);
  const div = useRef<HTMLDivElement>(null);

  if (selected) {
    options = options.filter((item) =>
      item.toLowerCase().includes(selected.toLowerCase())
    );
  }

  const handleClose = (): void => {
    setOpen(false);
    setCloseBtn(false);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      if (options.length > 0) {
        setSelected(options[0]);
      } else {
        setSelected('');
      }
      handleClose();
      (event.target as HTMLElement).blur();
    }
  };
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
    if (selected.length) {
      setCloseBtn(true);
    }
  };
  const handleOnFocus = (): void => {
    setOpen(true);
    if (selected) {
      setCloseBtn(true);
    }
  };

  useClickOutSide(div, handleClose);

  return (
    <div className="combobox" ref={div}>
      <input
        type="text"
        className="combobox-input"
        value={selected}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        placeholder={placeholder}
        onKeyPress={handleKeyDown}
      />

      {isCloseBtn && (
        <span
          className="combobox-btn"
          onClick={() => {
            setSelected('');
            setCloseBtn(false);
          }}
        >
          &times;
        </span>
      )}

      {isOpen && (
        <div className="combobox-content">
          {options.length ? (
            options.map((option: string) => (
              <div
                className="combobox-item"
                onClick={(e) => {
                  setSelected(option);
                  handleClose();
                }}
                key={option}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="combobox-item">No data</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComboBox;
