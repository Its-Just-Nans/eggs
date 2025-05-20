import { Fragment } from "react";

const HARD = "Hard egg";
const SOFT = "Soft-boiled egg";

const presets: Record<string, number> = {
    [SOFT]: 3 * 60,
    [HARD]: 10 * 60,
};

export default function EggTimerApp() {
    const formatTime = (t: number): string => {
        const m = Math.floor(t / 60)
            .toString()
            .padStart(2, "0");
        const s = (t % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="app">
            <a href="https://github.com/Its-Just-Nans/eggs">
                <p>https://github.com/Its-Just-Nans/eggs</p>
            </a>
            <br />
            <div className="card">
                <div className="options">
                    {Object.entries(presets).map(([key, seconds]) => (
                        <Fragment key={key}>
                            <div className="option">
                                {key} – {formatTime(seconds)}
                            </div>
                            <br />
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
