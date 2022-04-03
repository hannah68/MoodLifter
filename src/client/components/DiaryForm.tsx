import React from "react";

const DiaryForm = () => {
	return (
		<form>
			<textarea className="diary-textarea" placeholder="Today, I'm feeling..."></textarea>
			<div className="diary-btn">
        <div className="btn-groups">
          <button>Save</button>
          <button>Cancel</button>
        </div>
			</div>
		</form>
	);
};

export default DiaryForm;
