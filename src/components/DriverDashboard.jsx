import React, { useMemo, useState } from 'react';
import { Bus, Clock, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const demoRequests = [
  { id: 'r1', type: 'transit', location: 'North Gate', time: '3:15 PM', students: 3, status: 'pending' },
  { id: 'r2', type: 'meal', location: 'Dining Hall A', time: '12:45 PM', students: 7, status: 'pending' },
];

export default function DriverDashboard() {
  const [requests, setRequests] = useState(demoRequests);

  const pendingCount = useMemo(() => requests.filter(r => r.status === 'pending').length, [requests]);

  const respond = (id, eta) => {
    setRequests(prev => prev.map(r => (r.id === id ? { ...r, status: 'confirmed', eta } : r)));
  };

  return (
    <section id="dashboard" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Bus className="h-5 w-5 text-indigo-600" /> Driver & Service Dashboard
          </h2>
          <span className="text-sm text-slate-600">Pending: {pendingCount}</span>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {requests.map((req) => (
            <div key={req.id} className="rounded-lg border border-slate-200 p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-slate-800">{req.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Clock className="h-4 w-4" />
                  {req.time}
                </div>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                {req.type === 'transit'
                  ? `${req.students} students waiting for shuttle`
                  : `${req.students} students ready for lunch prep`}
              </div>

              {req.status === 'pending' ? (
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => respond(req.id, '5 min')}
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white text-sm px-3 py-1.5 hover:bg-indigo-700"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Confirm ETA 5m
                  </button>
                  <button
                    onClick={() => respond(req.id, '10 min')}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 text-slate-700 text-sm px-3 py-1.5 hover:bg-slate-50"
                  >
                    <Clock className="h-4 w-4" /> ETA 10m
                  </button>
                </div>
              ) : (
                <div className="mt-3 inline-flex items-center gap-2 text-emerald-600 text-sm">
                  <CheckCircle2 className="h-4 w-4" /> Confirmed • ETA {req.eta}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800">
          <AlertCircle className="h-4 w-4 mt-0.5" />
          <p className="text-sm">
            This is a live mock. In a full build, these cards would reflect real-time updates from the AI assistant and student requests via a database.
          </p>
        </div>
      </div>
    </section>
  );
}
