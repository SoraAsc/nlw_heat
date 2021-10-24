defmodule HeatTags.Reports.Get do
  import Ecto.Query
  alias HeatTags.{Report, Repo}

  def all_reports do
    query = from report in Report, select: report.report_text

    Repo.all(query)
  end
end
