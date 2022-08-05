import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Layout from '../core/components/page/Layout';

type Inputs = {
  example: string,
  exampleRequired: string,
};

function Contact() {
  const [displayForm, setDisplayForm] = useState(false);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Layout pageMeta={{
      title: 'Contact Route',
    }}
    >
      <main className="">
        <div className="flex flex-col items-center">
          <button onClick={() => setDisplayForm(!displayForm)} type="button" className="btn btn-primary mb-4 mt-4 rounded-xl">
            Get in touch
          </button>
          {
            displayForm ? (
              <div className="card w-96 bg-accent shadow-xl rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input {...register('exampleRequired', { required: true })} placeholder="Name" className="input input-bordered input-primary font-bold w-full max-w-xs rounded-xl" />
                  {errors.exampleRequired && <span className="badge badge-error gap-2">This field is required</span>}

                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input {...register('exampleRequired', { required: true })} placeholder="Email" className="input input-bordered input-primary font-bold w-full max-w-xs mt-4 rounded-xl" />
                  {errors.exampleRequired && <span className="badge badge-error gap-2 ">This field is required</span>}

                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input {...register('example')} placeholder="Organisation" className="input input-bordered input-primary font-bold w-full max-w-xs mt-4 rounded-xl" />

                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <textarea {...register('exampleRequired', { required: true })} className="textarea textarea-primary block font-bold w-full max-w-xs mt-4 rounded-xl" placeholder="Message" />
                  {errors.exampleRequired && <span className="badge badge-error gap-2">This field is required</span>}

                  <input type="submit" className="btn btn-primary mt-4 rounded-xl" />
                </form>
              </div>
            ) : null
        }

        </div>
      </main>
    </Layout>
  );
}

export default Contact;
