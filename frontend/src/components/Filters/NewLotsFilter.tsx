import React from 'react';

interface Props {
    onlyNew: boolean;
    onToggleOnlyNew: (value: boolean) => void;
}

const NewLotsFilter: React.FC<Props> = ({ onlyNew, onToggleOnlyNew }) => (
    <div>

        <h2 className="div-title">Недавние опубликовнные лоты (7 дней) </h2>
        <label className="checkbox-label">
            <input
                type="checkbox"
                checked={onlyNew}
                onChange={(e) => onToggleOnlyNew(e.target.checked)}
            />
            Показать лоты опубликованные за 7 дней
        </label>
    </div>
);

export default NewLotsFilter;
