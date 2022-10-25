

interface IInputPostagensProps {
    label: string;
    value: string;
    type?: string;
    placeholder:string
    onPressEnter?: () => void;
    onChange: (newValue: string) => void;
}

export const InputPostagens: React.FC<IInputPostagensProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                ? props.onPressEnter && props.onPressEnter()
                : undefined}
                placeholder=""
            /> |{" "}
        </label>
    );
}