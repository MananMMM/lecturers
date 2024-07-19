import { handleAdd } from "@/app/lib/actions/lecturer-action";

export default function Page() {
  {
    return (
      <div>
        <h1 className="is-size-1 ">Add Lecturer</h1>
        <div className="columns">
          <div className="column is-two-fifths my-4">
            <form className="box" action={handleAdd}>
              <div className="field my-4">
                <input 
                  type="text"
                  className="input is-focused is-rounded"
                  name="name"
                  placeholder="Enter a name"
                />
              </div>
              <div className="field my-4">
                <input
                  type="text"
                  className="input is-focused is-rounded"
                  name="surname"
                  placeholder="Enter a surname"
                />
              </div>
              <div className="field my-4">
                <input
                  type="text"
                  className="input is-focused is-rounded"
                  name="skills"
                  placeholder="Enter a skill"
                />
                <div className="field my-4">
                  <button className="button is-rounded is-link is-hovered">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
