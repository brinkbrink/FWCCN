import { BrowserRouter as Route } from 'react-router-dom';
import { FindApplicant } from './components/FindApplicant';
import { SubmitForm } from './components/SubmitForm';
import { NotFound  } from './components/NotFound';

export default function Routes () {
    return (
        <Routes>
            <Route path="/" element={<FindApplicant />}/>
            <Route path="/form" element={<SubmitForm />}/>
            <Route element={<NotFound />} />
        </Routes>
    )
}