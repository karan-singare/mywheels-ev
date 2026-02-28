import { useState } from "react";

interface KYCFormData {
  fullName: string;
  mobile: string;
  currentAddress: string;
  permanentAddress: string;
  idType: string;
}

const KYCForm: React.FC = () => {
  const [formData, setFormData] = useState<KYCFormData>({
    fullName: "",
    mobile: "",
    currentAddress: "",
    permanentAddress: "",
    idType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("KYC Submitted:", formData);

    // Later:
    // await fetch("/api/kyc", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-4"
    >
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 rounded bg-white text-black"
        required
      />

      <input
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-3 rounded bg-white text-black"
        required
      />

      <input
        name="currentAddress"
        placeholder="Current Address"
        value={formData.currentAddress}
        onChange={handleChange}
        className="w-full p-3 rounded bg-white text-black"
        required
      />

      <input
        name="permanentAddress"
        placeholder="Permanent Address"
        value={formData.permanentAddress}
        onChange={handleChange}
        className="w-full p-3 rounded bg-white text-black"
        required
      />

      <select
        name="idType"
        value={formData.idType}
        onChange={handleChange}
        className="w-full p-3 rounded bg-white text-black"
        required
      >
        <option value="">Select ID Proof</option>
        <option value="aadhaar">Aadhaar</option>
        <option value="license">Driving License</option>
        <option value="voter">Voter ID</option>
      </select>

      <button
        type="submit"
        className="w-full p-3 bg-primary text-black font-bold rounded hover:opacity-90 transition"
      >
        Submit KYC
      </button>
    </form>
  );
};

export default KYCForm;
