function Form() {
  return (
    <>
      <h1>Send us question</h1>
      <hr />
      <div className="form-container">
        <form>
          <label className="form-control">
            <span>Email:</span>
            <input type="text" />
          </label>
          <label className="form-control">
            <span>Yout text:</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;
