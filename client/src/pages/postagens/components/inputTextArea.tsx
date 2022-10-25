
interface IInputPostProps {
    label: string;
    value: string;
    type?: string;
    placeholder:string
    onPressEnter?: () => void;
    onChange: (newValue: string) => void;
}

export const InputPost: React.FC<IInputPostProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <textarea
                value={props.value}                
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                ? props.onPressEnter && props.onPressEnter()
                : undefined}
                placeholder="O que vocè esta pensando? "
                cols={50}
                rows={10}
            />
        </label>
    );
}