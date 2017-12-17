class Log < ApplicationRecord
	self.primary_key = :idLog

	default_scope { reorder(:idLog) }
end
