import Label from "./Label";

function Input({ label, value, onChange, onBlur, children, ...rest }) {
  const handleChange = (e) => {
    onChange(e);
  };
  const handleBlur = (e) => {
    onBlur(e);
  };

  return (
    <>
      <div className="col-md-8">
        <Label htmlFor={label}>{label} </Label>
        <input
          {...rest}
          className="form-control"
          aria-label={label}
          id={label}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="on"
          required
        />
      </div>
    </>
  );
}

export default Input;
