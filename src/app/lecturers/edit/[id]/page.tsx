import { getLecturerById } from "@/app/lib/api"
import { handleUpdate } from "@/app/lib/actions/lecturer-action"

interface IProps{
    params:{id:number}
}

export default function Edit({params}:IProps) {

    const lecturer=getLecturerById(params.id)
    return <>
        <p className="is-size-3">Edit Lecturer {params.id} </p>
        <div className="columns">
            <div className="is-two-fifth my-4">
                <form className="box" action={handleUpdate.bind(null,params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-focused is-rounded"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-focused is-rounded"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={lecturer.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-focused is-rounded"
                            name="salary"
                            placeholder="enter a skill"
                            defaultValue={lecturer.skills}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-rounded is-link is-hovered">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}