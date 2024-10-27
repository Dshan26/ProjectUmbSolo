import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Presentation } from './components/Presentation';
import { RegistrationForm } from './components/RegistrationForm';
import { Confirmation } from './components/Confirmation';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData(data);
    setStep(step + 1);
  };

  const exitApp = () => {
    alert('Gracias por usar la app.');
    window.close();
  };

  return (
    <div>
      <div>
        {step === 1 && <Presentation onNext={() => setStep(2)} />}
        {step === 2 && <RegistrationForm onSubmit={nextStep} />}
        {step === 3 && <Confirmation data={formData} onExit={exitApp} />}
      </div>
    </div>
  );
}

export default App;
