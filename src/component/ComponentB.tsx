export const ComponentB = (props: any) => {
    return (
        <div className="ChildComponent B">
            B<br />
            <textarea onChange={(e) => props.update(e.target.value)}></textarea>
        </div>
    );
};
